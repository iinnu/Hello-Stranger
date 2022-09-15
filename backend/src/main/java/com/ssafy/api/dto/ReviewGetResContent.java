package com.ssafy.api.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReviewGetResContent {
    int reviewId;
    String regDate;
    String musicCategory;
    String foodCategory;
    String activityCategory;
}
