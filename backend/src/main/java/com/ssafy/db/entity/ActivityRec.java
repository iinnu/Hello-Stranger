package com.ssafy.db.entity;

import lombok.Data;
import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "activity_recommend")
public class ActivityRec {
    @Id
    @Column(name = "activity_recommend_id")
    int activityRecommendId;

    @Column(name = "user_id")
    int userId;

    @Column(name = "activity")
    String activity;

    public ActivityRec(int userId) {
        this.userId = userId;
    }
}
