package com.ssafy.api.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FoodSimpleInfo {
    int foodId;
    String foodName;
    String foodAddress;
    double foodLatitude;
    double foodLongitude;
    String foodTime;
}
