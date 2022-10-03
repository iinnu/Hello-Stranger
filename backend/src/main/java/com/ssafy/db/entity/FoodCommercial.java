package com.ssafy.db.entity;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Table(name = "food_commercial")
public class FoodCommercial {

    /*
    food_category_id int PK
food_dong varchar(40)
food_category varchar(50)
cnt int

    * */
    @Id
    @Column(name = "food_category_id")
    int foodCategoryId;
    @Column(name = "food_category")
    String foodCategory;
    @Column(name = "cnt")
    int cnt;
    @Column(name = "food_dong")
    String foodDong;

}
