package com.ssafy.spark;

import org.apache.spark.sql.*;
import java.util.Arrays;
import java.util.List;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;

import scala.Tuple2;

public class ActivityAnalysis {
    public static void main( String[] args ) {

        SparkSession spark = SparkSession.builder().appName("analysis").master("local").getOrCreate();

        // mysql => dataset
        // 클러스터 서버 이용시 option("driver","com.mysql.jdbc.Driver") 제외
        Dataset<Row> df = spark.read().format("jdbc").option("url", "jdbc:mysql://j7d104.p.ssafy.io/hello_stranger?useSSL=false&serverTimezone=Asia/Seoul").option("driver","com.mysql.jdbc.Driver").option("dbtable", "activity").option("user", "D104").option("password", "37h!li0_st^@s0313").load();
        Dataset<Row> _df = df.select("activity_category", "activity_sigungu");
        Dataset<Row> newdf = _df.selectExpr("concat(activity_sigungu, ' ', activity_category) as key" );
        List<String> list = newdf.as(Encoders.STRING()).collectAsList();

        JavaSparkContext sc = new JavaSparkContext(spark.sparkContext());
        JavaRDD<String> listRDD = sc.parallelize(list);
        JavaPairRDD<String, Integer> counts = listRDD
                .flatMap(s -> Arrays.asList(s.split(",")).iterator())
                .mapToPair(word -> new Tuple2<>(word, 1))
                .reduceByKey((a, b) -> a + b);

        // result
        // counts.foreach(data -> {
        // System.out.println(data._1 + " " + data._2);
        // });

        Dataset<Row> convertResult = spark.createDataset(JavaPairRDD.toRDD(counts), Encoders.tuple(Encoders.STRING(), Encoders.INT())).toDF("key", "cnt");
        Dataset<Row> result = convertResult.selectExpr("concat(split(key, ' ')[0], ' ' , split(key, ' ')[1]) as activity_sigungu", "split(key, ' ')[2] as activity_category", "cnt");

        Dataset<Row> _result = result.withColumn("activity_category_id", functions.monotonically_increasing_id());

        // dataset => mysql, overwrite
        _result.write().format("jdbc").option("url", "jdbc:mysql://j7d104.p.ssafy.io/hello_stranger?useSSL=false&serverTimezone=Asia/Seoul").option("driver","com.mysql.jdbc.Driver").option("dbtable", "activity_commercial").option("user", "D104").option("password", "37h!li0_st^@s0313").mode("overwrite").save();

        System.out.println("complete");
        spark.stop();
    }
}
