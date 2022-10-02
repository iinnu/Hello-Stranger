package com.ssafy.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "activity_commercial")
public class ActivityCommercial {
    @Id
    @Column(name = "activity_id")
    int id;
    @Column(name = "activity_sigungu")
    String activitySigungu;
    @Column(name = "activity_category")
    String activityCategory;
    @Column(name = "cnt")
    int cnt;

}
