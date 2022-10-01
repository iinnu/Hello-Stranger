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
    @Column
    int id;
    @Column
    String activitySigungu;
    @Column
    String activityCategory;
    @Column
    int cnt;

}
