package com.ssafy.api.service;

import com.ssafy.api.request.CategoryChoiceReq;
import com.ssafy.api.request.DetailRatingRegistReq;
import com.ssafy.api.response.ActivityRecGetRes;
import com.ssafy.api.response.FoodRecGetRes;
import com.ssafy.api.response.MusicRecGetRes;
import com.ssafy.db.entity.User;

import java.util.List;

public interface RecService {
    List<MusicRecGetRes> getMusicRec(int key, User user);
    List<ActivityRecGetRes> getActivityRec(int key, double distance, double latitude, double longitude ,User user);
    List<FoodRecGetRes> getFoodRec(int key, double distance, double latitude, double longitude,User user);

    public void registResultCategory(CategoryChoiceReq req,User user);

    void registDetailRating(DetailRatingRegistReq detailRatingResgistReq, User user);
}
