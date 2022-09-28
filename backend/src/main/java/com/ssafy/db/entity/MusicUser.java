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

    @Column(name = "music_id")
    int musicId;

    @Column(name = "like_YN")
    int likeYN;

    public MusicUser() {};

    @Builder
    public MusicUser(int userId, int musicId, int likeYN) {
        this.userId = userId;
        this.musicId = musicId;
        this.likeYN = likeYN;
    }
}
