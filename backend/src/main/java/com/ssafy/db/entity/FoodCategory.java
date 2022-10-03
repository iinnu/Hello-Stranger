package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/*
  `food_category_name` VARCHAR(50) NOT NULL,
  `food_category_feature` VARCHAR(50) NULL DEFAULT NULL,
  `food_category_img_url` VARCHAR(500) NULL DEFAULT NULL,
 */
@Entity
@Getter
@Table(name = "food_category")
public class FoodCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_category_name")
    String categoryName;

    @JsonIgnore
    @Column(name = "food_category_feature")
    String categoryFeatrue;

    @Column(name = "food_category_img_url")
    String categoryImgUrl;

    @OneToMany(mappedBy = "foodCategory")
    List<Review> reviews = new ArrayList<>();

    public FoodCategory() {};

    @Builder
    public FoodCategory(String categoryName, String categoryImgUrl) {
        this.categoryName = categoryName;
        this.categoryImgUrl = categoryImgUrl;
    }
}
