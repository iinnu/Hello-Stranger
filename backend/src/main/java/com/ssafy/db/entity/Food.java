package com.ssafy.db.entity;


import lombok.Getter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "food")
public class Food {
    @Id
    @Column(name = "food_id")
    int foodId;

    @Column(name = "food_name")
    String foodName;

    @Column(name = "food_dong")
    String foodDong;

    @Column(name = "food_category")
    String foodCategory;


    @Column(name = "food_address")
    String foodAddress;

    @Column(name = "food_latitude")
    double foodLatitude;

    @Column(name = "food_longitude")
    double foodLongitude;

    @Column(name = "food_rating")
    String foodRating;

    @Column(name = "food_img_url")
    String foodImgUrl;

    @Column(name = "food_review", columnDefinition = "TEXT")
    String foodReview;

    @Column(name = "food_tel")
    String foodTel;

    @Column(name = "food_time")
    String foodTime;

    @Column(name = "food_desc",columnDefinition = "TEXT")
    String foodDesc;
}
