package com.ssafy.db.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;
/*
  `food_user_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `food_name` VARCHAR(50) NULL DEFAULT NULL,
  `like_YN` INT NULL DEFAULT NULL,
 */
@Entity
@Getter
@Table(name = "food_user")
public class FoodUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "food_user_id")
    int foodUserId;

    @Column(name = "user_id")
    int userId;

    @Column(name = "food_name")
    String foodName;

    @Column(name = "like_YN")
    int likeYN;

    public FoodUser() {};

    @Builder
    public FoodUser(int userId, String foodName, int likeYN) {
        this.userId = userId;
        this.foodName = foodName;
        this.likeYN = likeYN;
    }
}
