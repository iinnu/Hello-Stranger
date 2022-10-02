package com.ssafy.api.service;

import com.ssafy.api.dto.BaseInfo;
import com.ssafy.api.response.CommercialAreaGetRes;
import com.ssafy.db.entity.Activity;
import com.ssafy.db.entity.ActivityCommercial;
import com.ssafy.db.entity.Food;
import com.ssafy.db.repository.ActivityCommercialRepository;
import com.ssafy.db.repository.ActivityRepository;
import com.ssafy.db.repository.FoodCommercialRepository;
import com.ssafy.db.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class CommercialAreaServiceImpl implements CommercialAreaService{

    @Autowired
    FoodRepository foodRepository;
    @Autowired
    ActivityRepository activityRepository;
    @Autowired
    FoodCommercialRepository foodCommercialRepository;
    @Autowired
    ActivityCommercialRepository activityCommercialRepository;

    @Override
    public CommercialAreaGetRes getCommercialArea(String userAddress,double latitude, double longitude) {
        String foodKeyAdress = userAddress;
        String activityKeyAdress = userAddress;

        //1. 가장많은 음식점(desc)
        List<Food> mostFood = foodRepository.findFoodByCommercial(foodKeyAdress,latitude,longitude,"desc");
        String mostFoodCategory = mostFood.get(0).getFoodCategory();
        List<BaseInfo> mostResFood = new ArrayList<>();
        for(Food food : mostFood){
            mostResFood.add(BaseInfo.builder()
                            .id(food.getFoodId())
                            .address(food.getFoodAddress())
                            .latitude(food.getFoodLatitude())
                            .longitude(food.getFoodLongitude())
                            .name(food.getFoodName())
                            .time(food.getFoodTime())
                            .build());
        }
        //2. 가장적은 음식점(asc)
        List<Food> leastFood = foodRepository.findFoodByCommercial(foodKeyAdress,latitude,longitude,"asc");
        List<BaseInfo> leastResFood = new ArrayList<>();
        String leastFoodCategory = "";
        if(leastFood.isEmpty()){
            leastFoodCategory = foodCommercialRepository.findTopByFoodDongOrderByCnt(foodKeyAdress).getFoodCategory();
        }
        else{
            leastFoodCategory = leastFood.get(0).getFoodCategory();
            for(Food food : leastFood){
                leastResFood.add(BaseInfo.builder()
                        .id(food.getFoodId())
                        .address(food.getFoodAddress())
                        .latitude(food.getFoodLatitude())
                        .longitude(food.getFoodLongitude())
                        .name(food.getFoodName())
                        .time(food.getFoodTime())
                        .build());
            }
        }

        //3, 가장많은 활동(desc)
        List<Activity> mostActivity = activityRepository.findActivityByCommercial(activityKeyAdress,latitude,longitude,"desc");
        String mostActivityCategory = mostActivity.get(0).getActivityCategory();
        List<BaseInfo> mostResActivity = new ArrayList<>();
        for(Activity activity : mostActivity){
            mostResFood.add(BaseInfo.builder()
                    .id(activity.getActivityId())
                    .address(activity.getActivityAddress())
                    .latitude(activity.getActivityLatitude())
                    .longitude(activity.getActivityLongitude())
                    .name(activity.getActivityName())
                    .time(activity.getActivityTime())
                    .build());
        }

        //4. 가장적은 활동(asc)
        List<Activity> leastActivity = activityRepository.findActivityByCommercial(activityKeyAdress,latitude,longitude,"asc");
        List<BaseInfo> leastResActivity = new ArrayList<>();
        String leastActivityCategory = "";
        if(leastActivity.isEmpty()){
            leastActivityCategory = foodCommercialRepository.findTopByFoodDongOrderByCnt(activityKeyAdress).getFoodCategory();
        }
        else{
            leastActivityCategory = leastActivity.get(0).getActivityCategory();
            for(Activity activity : leastActivity){
                leastResFood.add(BaseInfo.builder()
                        .id(activity.getActivityId())
                        .address(activity.getActivityAddress())
                        .latitude(activity.getActivityLatitude())
                        .longitude(activity.getActivityLongitude())
                        .name(activity.getActivityName())
                        .time(activity.getActivityTime())
                        .build());
            }
        }

        return CommercialAreaGetRes.builder()
                .mostFoodCategory(mostFoodCategory)
                .mostFoodStore(mostResFood)
                .leastFoodStore(leastResFood)
                .leastFoodCategory(leastFoodCategory)
                .leastActivityCategory(leastActivityCategory)
                .mostActivityCategory(mostActivityCategory)
                .mostActivityStore(mostResActivity)
                .leastActivityStore(leastResActivity)
                .build();
    }
}
