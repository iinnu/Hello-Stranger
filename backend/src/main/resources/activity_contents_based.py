from encodings import utf_8
from tempfile import tempdir
import pandas as pd
import numpy as np
import pymysql

conn = pymysql.connect(host="j7d104.p.ssafy.io", port=3306, user="D104", passwd="37h!li0_st^@s0313", db="hello_stranger", charset='utf8')
cur = conn.cursor()

sql = ''' SELECT * FROM activity_recommend where activity IS NULL '''

cur.execute(sql)
activity_recommend = cur.fetchall()
new_user = activity_recommend[0][1]

sql = ''' SELECT activity_name, like_YN FROM activityuser WHERE user_id = {0}'''.format(new_user)
cur.execute(sql)
user_likes = cur.fetchall()

sql = '''SELECT activity_category_name, activity_category_feature FROM activity_category'''
cur.execute(sql)
activity_features = cur.fetchall()

user_likes_join_feature = []

for i in range(len(user_likes)):
  for j in range(len(activity_features)):
    if user_likes[i][1] != 1:
      continue
    if user_likes[i][0] == activity_features[j][0]:
      temp = [user_likes[i][0], activity_features[j][1]]
      user_likes_join_feature.append(temp)

user_likes_feature_all = []
for i in range(len(user_likes_join_feature)):
  user_likes_feature_all += user_likes_join_feature[i][1].split(", ")

user_likes_feature = {}
for i in range(len(user_likes_feature_all)):
  if user_likes_feature_all[i] in user_likes_feature:
    user_likes_feature[user_likes_feature_all[i]] += 1
  else:
    user_likes_feature[user_likes_feature_all[i]] = 1

sorted_dict = sorted(user_likes_feature.items(), key = lambda item: item[1], reverse = True)
new_name = 'new_name'
new_feature = ''

i = 0
for tuple in sorted_dict:
  if i == 13:
    break
  new_feature += str(tuple[0]) + ', '  
      
activity_features = pd.DataFrame(activity_features, columns=['activity_name', 'activity_feature'])
activity_features.loc[46] = [new_name, new_feature]
from sklearn.feature_extraction.text import CountVectorizer

count_vect = CountVectorizer(min_df=0, ngram_range=(1,1))
feature_mat = count_vect.fit_transform(activity_features['activity_feature'])

from sklearn.metrics.pairwise import cosine_similarity

feature_sim = cosine_similarity(feature_mat, feature_mat)
#print(feature_sim.shape)
#print(feature_sim[:2])

feature_sim_sorted_ind = feature_sim.argsort()[:, ::-1]
# print(feature_sim_sorted_ind[46][0])

# print(activity_features)

answer = ''
for i in range(13, 31):
  num = feature_sim_sorted_ind[46][i].item()
  answer += activity_features.iloc[num][0] + " "

sql = '''UPDATE activity_recommend SET activity = '{0}' where user_id = {1}'''.format(answer, new_user)
cur.execute(sql)
conn.commit()
