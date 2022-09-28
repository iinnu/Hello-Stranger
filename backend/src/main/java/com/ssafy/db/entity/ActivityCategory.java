package com.ssafy.db.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/*
  `activity_category_name` VARCHAR(50) NOT NULL,
  `activity_category_feature` VARCHAR(50) NULL DEFAULT NULL,
  `activity_category_img_url` VARCHAR(500) NULL DEFAULT NULL,
 */
@Entity
@Getter
@Table(name = "activity_category")
public class ActivityCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "activity_category_name")
    String categoryName;

    @Column(name = "activity_category_feature")
    String categoryFeatrue;

    @Column(name = "activity_category_img_url")
    String categoryImgUrl;

    @OneToMany(mappedBy = "activityCategory")
    List<Review> reviews = new ArrayList<>();

    public ActivityCategory() {};

    @Builder
    public ActivityCategory(String categoryName, String categoryImgUrl) {
        this.categoryName = categoryName;
        this.categoryImgUrl = categoryImgUrl;
    }
}
