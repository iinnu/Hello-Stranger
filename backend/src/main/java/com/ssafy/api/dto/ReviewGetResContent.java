package com.ssafy.api.dto;

import com.ssafy.db.entity.ActivityCategory;
import com.ssafy.db.entity.FoodCategory;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReviewGetResContent {
    int reviewId;
    String title;
    String regDate;
    int musicId;
    String evalYN;
    String foodCategoryName;
    String activityCategoryName;
}
