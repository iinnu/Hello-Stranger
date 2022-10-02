from encodings import utf_8
from tempfile import tempdir
import pandas as pd
import numpy as np
import pymysql

conn = pymysql.connect(host="j7d104.p.ssafy.io", port=3306, user="D104", passwd="37h!li0_st^@s0313", db="hello_stranger", charset='utf8')
cur = conn.cursor()

sql = ''' SELECT * FROM music_recommend where music IS NULL '''

cur.execute(sql)
music_recommend = cur.fetchall()
new_user = music_recommend[0][1]

sql = ''' SELECT music_id, like_YN FROM music_user WHERE user_id = {0}'''.format(new_user)
cur.execute(sql)
user_likes = cur.fetchall()

sql = '''SELECT music_id, music_feature FROM music'''
cur.execute(sql)
music_features = cur.fetchall()

user_likes_join_feature = []

for i in range(len(user_likes)):
  for j in range(len(music_features)):
    if user_likes[i][1] != 1:
      continue
    if user_likes[i][0] == music_features[j][0]:
      temp = [user_likes[i][0], music_features[j][1]]
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
  if i == 8:
    break
  new_feature += str(tuple[0]) + ', '  
      
music_features = pd.DataFrame(music_features, columns=['music_id', 'music_feature'])
music_features.loc[267] = [269, new_feature]

from sklearn.feature_extraction.text import CountVectorizer

count_vect = CountVectorizer(min_df=0, ngram_range=(1,1))
feature_mat = count_vect.fit_transform(music_features['music_feature'])

from sklearn.metrics.pairwise import cosine_similarity

feature_sim = cosine_similarity(feature_mat, feature_mat)

feature_sim_sorted_ind = feature_sim.argsort()[:, ::-1]

answer = ''
for i in range(120, 150):
  num = feature_sim_sorted_ind[267][i].item()
  answer += str(music_features.iloc[num][0]) + " "

sql = '''UPDATE music_recommend SET music = '{0}' where user_id = {1}'''.format(answer, new_user)
cur.execute(sql)
conn.commit()
