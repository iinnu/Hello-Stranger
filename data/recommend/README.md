
# Hadoop 추천 알고리즘 실행 파일

```python

# activity_users.py

  

import findspark

findspark.init()

  

from pyspark.sql import SparkSession

  

# mysql에서 user정보 불러오기

spark = SparkSession.builder.config("spark.jars", "/lib/spark/jars/mariadb-connector-java.jar ").master("local").appName("PySpark_MYSQL_TEST").getOrCreate()

activity_users = spark.read.format("jdbc").option("url", "jdbc:mysql://j7d104.p.ssafy.io/hello_stranger?useSSL=false&serverTimezone=Asia/Seoul").option("driver", "org.mariadb.jdbc.Driver").option("dbtable", "activityuser").option("user", "D104").option("password", "37h!li0_st^@s0313").load()

  

# mysql에서 추가된 내용 hdfs 저장하기

  

#activity_users.coalesce(1).write.format("com.databricks.spark.csv").option("header", "true").save('hdfs://ip-172-31-32-75.ap-northeast-2.compute.internal:8020/j7d104/recommend_input/mysql_activity_user.csv')

#last_activity_users = spark.read.csv('hdfs://ip-172-31-32-75.ap-northeast-2.compute.internal:8020/j7d104/recommend_input/mysql_activity_user.csv', sep='\t')

activity_users.write.save(path='hdfs://ip-172-31-32-75.ap-northeast-2.compute.internal:8020/j7d104/recommend_input/mysql_activity_user.csv', format='csv', mode='append', sep='\t')

  

activity_users = spark.read.csv('hdfs://ip-172-31-32-75.ap-northeast-2.compute.internal:8020/j7d104/recommend_input/mysql_activity_user.csv', sep='\t')

  

# 저장한 mySQL은 지우기

import mysql.connector

  

mydb = mysql.connector.connect(host="j7d104.p.ssafy.io", user="D104", password="37h!li0_st^@s0313", database="hello_stranger")

  

mycursor = mydb.cursor()

  

sql = "DELETE FROM hello_stranger.activityuser"

  

mycursor.execute(sql)

mydb.commit()

print(mycursor.rowcount, "record(s) deleted")

  

# 추천 시작

from pyspark.sql.functions import col

import pandas as pd

import numpy as np

  

activity_users = activity_users.withColumn("activity_user_id", col("_c0").cast("int"))

activity_users = activity_users.withColumn("user_id", col("_c1").cast("int"))

activity_users = activity_users.withColumn("activity_name", col("_c2").cast("String"))

activity_users = activity_users.withColumn("choice_YN", col("_c3").cast("int"))

  

activity_users.createOrReplaceTempView("activity_users")

  

column_to_drop = ['_c0', '_c1', '_c2', '_c3']

activity_users = activity_users.drop(*column_to_drop)

  

# 카테고리 숫자랑 엮기

activity_features = spark.read.csv('hdfs://ip-172-31-32-75.ap-northeast-2.compute.internal:8020/j7d104/recommend_input/activity_feature.txt', sep='\t')

activity_features = activity_features.withColumn("activity_id", col("_c0").cast("int"))

activity_features = activity_features.withColumn("activity_name", col("_c1").cast("string"))

activity_features = activity_features.withColumn("activity_feature", col("_c2").cast("string"))

  

activity_features.createOrReplaceTempView('activity_features')

column_to_drop = ['_c0', '_c1', '_c2']

activity_features = activity_features.drop(*column_to_drop)

  

query = '''select u.user_id, u.activity_name, u.choice_YN, f.activity_id from activity_users u Join activity_features f on u.activity_name = f.activity_name'''

activity_users = spark.sql(query)

  

# train, test 나누기

train_df, test_df = activity_users.randomSplit([0.8, 0.2])

  

# 학습 시키기

from pyspark.ml.recommendation import ALS

als = ALS(maxIter = 5, regParam=0.1, userCol='user_id', itemCol = 'activity_id', ratingCol = 'choice_YN', coldStartStrategy='drop')

  

model = als.fit(train_df)

  

prediction = model.transform(test_df)

prediction.show()

  

prediction.select('choice_YN', 'prediction').describe().show()

  

# 평가하기

from pyspark.ml.evaluation import RegressionEvaluator

evaluator = RegressionEvaluator(metricName='rmse', labelCol='choic새ㅕ초e_YN',predictionCol='prediction')

  

rmse = evaluator.evaluate(prediction)

rmse

  

from pyspark.sql.types import IntegerType

  

query = '''SELECT DISTINCT user_id FROM activity_users '''

users = spark.sql(query)

  

users = list(users.select('user_id').toPandas()['user_id'])

  

for i in  range(len(users)):

user_df = spark.createDataFrame([users[i]], IntegerType()).toDF('user_id')

  

user_recommend = model.recommendForUserSubset(user_df, 15)

activity_list = user_recommend.collect()[0].recommendations

  

recs_df = spark.createDataFrame(activity_list)

recs_df.createOrReplaceTempView('recommendations')

  

query = '''select f.activity_name from recommendations r Join activity_features f on r.activity_id = f.activity_id'''

  

user_recommend = spark.sql(query)

user_recommend = user_recommend.toPandas()

  

#my_sql_pd = pd.DataFrame.from_dict([{ 'user_id' : users[i], }])

  

#for i in range(len(user_recommend.index)):

# col_name = 'activity' + str(i+1)

# my_sql_pd.insert(i+1, col_name, user_recommend.loc[i, 'activity_name'])

  

activity_str = ''

for j in  range(len(user_recommend.index)):

activity_str = activity_str + user_recommend.loc[j, 'activity_name'] + ' '

  

my_sql_pd = pd.DataFrame.from_dict([{ 'user_id' : users[i], 'activity' : activity_str }])

  

my_sql_df = spark.createDataFrame(my_sql_pd)

my_sql_df.show()

  

# my_sql에 저장

sql = "UPDATE hello_stranger.activity_recommend SET activity = '{0}' WHERE user_id = {1}".format(activity_str, users[i])

  

mycursor.execute(sql)

mydb.commit()

```

  
  
  

```bash

# activity_users.sh

*!/bin/sh

/경로/spark-submit activity_recommend.py

```

  
  
  

```

# cron

*/1 * * * /home/j7d104/recommend/activity_recommend.sh

```

음식, 음악 또한 파일 경로만 다를 뿐 같은 방법으로 작성 됨