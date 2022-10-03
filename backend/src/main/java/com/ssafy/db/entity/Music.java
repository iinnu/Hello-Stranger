package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "music")
public class Music {

    /*
music_id int PK
music_name varchar(100)
music_artist varchar(50)
music_img_url varchar(1000)
music_feature varchar(300)
     */
    @Id
    @Column(name = "music_id")
    int musicId;

    @Column(name = "music_name")
    String musicName;
    @Column(name = "music_artist")
    String musicArtist;
    @Column(name = "music_img_url")
    String musicImgUrl;

    @JsonIgnore
    @Column(name = "music_feature")
    String musicFeature;

}
