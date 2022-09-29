package com.ssafy.db.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;

/*
  `activity_user_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `activity_name` VARCHAR(50) NULL DEFAULT NULL,
  `like_YN` INT NULL DEFAULT NULL,
 */
@Entity
@Getter
@Table(name = "activityuser")
public class ActivityUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "activity_user_id")
    int activityUserId;

    @Column(name = "user_id")
    int userId;

    @Column(name = "activity_name")
    String activityName;

    @Column(name = "like_YN")
    int likeYN;

    public ActivityUser() {};

    @Builder
    public ActivityUser(int userId, String activityName, int likeYN) {
        this.userId = userId;
        this.activityName = activityName;
        this.likeYN = likeYN;
    }
}
