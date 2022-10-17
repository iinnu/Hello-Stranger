## 실행
1. jar 파일로 빌드
2. Spark가 있는 서버로 jar파일 옮기기
3. spark-submit 경로 찾기
4. `spark-sub경로 --class 만든파일이름 --master 지정한master옵션 jar파일위치`로 실행
```
/usr/lib/spark/bin/spark-submit --class  com.ssafy.spark.FoodAnalysis  --master local /home/j7d104/analysis/analysis-1.0-SNAPSHOT.jar
```
