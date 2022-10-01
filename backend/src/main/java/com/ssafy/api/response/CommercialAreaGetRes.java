package com.ssafy.api.response;

import com.ssafy.api.dto.BaseInfo;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CommercialAreaGetRes {
    String mostFoodCategory;
    String leastFoodCategory;
    String mostActivityCategory;
    String leastActivityCategory;
    private List<BaseInfo> mostFoodStore;
    private List<BaseInfo> leastFoodStore;
    private List<BaseInfo> mostActivityStore;
    private List<BaseInfo> leastActivityStore;
}
