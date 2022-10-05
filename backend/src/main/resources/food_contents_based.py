from encodings import utf_8
from tempfile import tempdir
import pandas as pd
import numpy as np
import pymysql
import sys

conn = pymysql.connect(host="j7d104.p.ssafy.io", port=3306, user="D104", passwd="37h!li0_st^@s0313", db="hello_stranger", charset='utf8')
cur = conn.cursor()

# sql = ''' SELECT * FROM food_recommend where food IS NULL '''
#
# cur.execute(sql)
# food_recommend = cur.fetchall()
new_user = int(sys.argv[1])

sql = ''' SELECT food_name, like_YN FROM food_user WHERE user_id = {0} and like_YN = 1'''.format(new_user)
cur.execute(sql)
user_likes = cur.fetchall()

sql = '''SELECT food_category_name, food_category_feature FROM food_category'''
cur.execute(sql)
food_features = cur.fetchall()

user_likes_join_feature = []

for i in range(len(user_likes)):
  for j in range(len(food_features)):
    if user_likes[i][1] != 1:
      continue
    if user_likes[i][0] == food_features[j][0]:
      temp = [user_likes[i][0], food_features[j][1]]
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
  if i == 15:
    break
  new_feature += str(tuple[0]) + ', '  
      
food_features = pd.DataFrame(food_features, columns=['food_name', 'food_feature'])
food_features.loc[89] = [new_name, new_feature]
from sklearn.feature_extraction.text import CountVectorizer

count_vect = CountVectorizer(min_df=0, ngram_range=(1,1))
feature_mat = count_vect.fit_transform(food_features['food_feature'])

from sklearn.metrics.pairwise import cosine_similarity


feature_sim = cosine_similarity(feature_mat, feature_mat)

feature_sim_sorted_ind = feature_sim.argsort()[:, ::-1]

answer = ''
for i in range(30, 48):
  num = feature_sim_sorted_ind[89][i].item()
  answer += food_features.iloc[num][0] + " "

sql = '''UPDATE food_recommend SET food = '{0}' where user_id = {1}'''.format(answer, new_user)
cur.execute(sql)
conn.commit()
