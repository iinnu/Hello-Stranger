package com.ssafy.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "music_recommend")
@Getter
public class MusicRec {

    @Id
    @Column(name = "music_recommend_id")
    int musicRecommendId;
    @Column(name = "user_id")
    int userId;
    @Column(name = "music")
    String music;

    public MusicRec(int userId) {
        this.userId = userId;
    }
}
