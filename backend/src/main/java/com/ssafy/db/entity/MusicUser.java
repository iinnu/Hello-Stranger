package com.ssafy.db.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;

/*
  `music_user_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `music_name` VARCHAR(100) NULL DEFAULT NULL,
  `like_YN` INT NULL DEFAULT NULL,
 */
@Entity
@Getter
@Table(name = "music_user")
public class MusicUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "music_user_id")
    int musicUserId;

    @Column(name = "user_id")
    int userId;

    @Column(name = "music_name")
    String musicName;

    @Column(name = "like_YN")
    int likeYN;

    public MusicUser() {};

    @Builder
    public MusicUser(int musicUserId, int userId, String musicName, int likeYN) {
        this.musicUserId = musicUserId;
        this.userId = userId;
        this.musicName = musicName;
        this.likeYN = likeYN;
    }
}
