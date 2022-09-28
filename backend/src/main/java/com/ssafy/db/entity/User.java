package com.ssafy.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
/*
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_email` VARCHAR(50) NOT NULL,
  `user_nickname` VARCHAR(20) NOT NULL,
  `user_img` VARCHAR(500) NULL DEFAULT NULL,
 */
@Entity
@Getter
@Table (name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    int userId;

    @Column(name = "user_email")
    String userEmail;

    @Column(name = "user_nickname")
    String userNickname;

    @Column(name = "user_img")
    String userImg;

    @OneToMany(mappedBy = "user")
    List<Review> reviews = new ArrayList<>();


    public User() {};

}
