package com.ssafy.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "food_commercial")
public class FoodCommercial {
    @Column(name = "")
    int id;
    String category;
    int cnt;
}
