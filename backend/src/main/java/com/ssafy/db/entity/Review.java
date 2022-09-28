package com.ssafy.db.entity;

import lombok.Getter;

import javax.persistence.*;

/*
  `review_id` INT NOT NULL AUTO_INCREMENT,
  `music_id` INT NOT NULL,
  `reg_data` VARCHAR(20) NOT NULL,
  `eval_YN` VARCHAR(1) NOT NULL DEFAULT 'N',
  `title` VARCHAR(50) NOT NULL,
  `User_user_id` INT NOT NULL,
  `activity_category_name` VARCHAR(50) NOT NULL,
  `food_category_name` VARCHAR(50) NOT NULL,
 */
@Entity
@Getter
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    int reviewId;

    @Column(name = "music_id")
    int musicId;

    @Column(name = "reg_data")
    String regDate;

    @Column(name = "evalYN")
    String evalYN;

    @Column(name = "title")
    String title;

    @ManyToOne
    @JoinColumn(name = "User_user_id")
    User user;

    @ManyToOne
    @JoinColumn(name = "activity_category_name")
    ActivityCategory activityCategory;

    @ManyToOne
    @JoinColumn(name = "food_category_name")
    FoodCategory foodCategory;

    public Review() {};

}
