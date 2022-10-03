package com.ssafy.api.service;

import com.ssafy.api.dto.DetailInfo;

public interface DetailService {

    public DetailInfo getActivity(int activityId);
    public DetailInfo getFood(int foodId);
}
