package com.ssafy.api.service;

import com.ssafy.api.response.ActivityRecGetRes;
import com.ssafy.api.response.FoodRecGetRes;
import com.ssafy.api.response.MusicRecGetRes;

import java.util.List;
import java.util.Map;

public interface RecService {
    List<MusicRecGetRes> getMusicRec(int key);
    List<ActivityRecGetRes> getActivityRec(int key, double distance, double latitude, double longitude );
    List<FoodRecGetRes> getFoodRec(int key, double distance, double latitude, double longitude);
}
