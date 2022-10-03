package com.ssafy.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "food_recommend")
public class FoodRec {
    @Id
    @Column(name = "food_recommend_id")
    int foodRecommendId;

    @Column(name = "user_id")
    int userId;

    @Column(name = "food")
    String food;

    public FoodRec(int userId) {
        this.userId = userId;
    }
}
