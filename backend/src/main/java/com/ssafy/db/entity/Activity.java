package com.ssafy.db.entity;


import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Setter
@Table(name = "activity")
public class Activity {
    @Id
    @Column(name = "activity_id")
    int activityId;

    @Column(name = "activity_category")
    String activityCategory;

    @Column(name = "activity_sigungu")
    String activitySigungu;

    @Column(name = "activity_address")
    String activityAddress;

    @Column(name = "activity_latitude")
    double activityLatitude;

    @Column(name = "activity_longitude")
    double activityLongitude;

    @Column(name = "activity_rating")
    String activityRating;

    @Column(name = "activity_img_url")
    String activityImgUrl;

    @Column(name = "activity_review", columnDefinition = "TEXT")
    String activityReview;

    @Column(name = "activity_tel")
    String activityTel;

    @Column(name = "activity_time")
    String activityTime;

    @Column(name = "activity_desc",columnDefinition = "TEXT")
    String activityDesc;


}
