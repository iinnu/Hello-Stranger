package com.ssafy.api.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CommercialAreaGetRes {
    String dongName;
    String leastFoodCategory;
    int leastFoodCount;
    String mostFoodCategory;
    int mostFoodCount;
    String leastActivityCategory;
    int leastActivityCount;
    String mostActivityCategory;
    int mostActivityCount;
}
