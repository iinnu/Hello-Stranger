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
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
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
        String[] parsing = userAddress.split(" ");

        if(parsing[0].equals("서울")) parsing[0] = "서울특별시";
        else if(parsing[0].equals("부산")) parsing[0] = "부산광역시";
        else if(parsing[0].equals("인천")) parsing[0] = "인천광역시";
        else if(parsing[0].equals("대구")) parsing[0] = "대구광역시";
        else if(parsing[0].equals("대전")) parsing[0] = "대전광역시";
        else if(parsing[0].equals("광주")) parsing[0] = "광주광역시";
        else if(parsing[0].equals("울산")) parsing[0] = "울산광역시";
        else if(parsing[0].equals("세종")) parsing[0] = "세종특별자치시";
        else if(parsing[0].equals("경기")) parsing[0] = "경기도";
        else if(parsing[0].equals("강원")) parsing[0] = "강원도";
        else if(parsing[0].equals("충북")) parsing[0] = "충청북도";
        else if(parsing[0].equals("충남")) parsing[0] = "충청남도";
        else if(parsing[0].equals("전북")) parsing[0] = "전라북도";
        else if(parsing[0].equals("전남")) parsing[0] = "전라남도";
        else if(parsing[0].equals("경북")) parsing[0] = "경상북도";
        else if(parsing[0].equals("경남")) parsing[0] = "경상남도";
        else if(parsing[0].equals("제주")) parsing[0] = "제주특별자치도";

        String foodKeyAdress = parsing[0]+" "+parsing[1]+" "+parsing[2];
        String activityKeyAdress = parsing[0]+" "+parsing[1];

        //1. 가장많은 음식점(desc)
        List<Food> mostFood = foodRepository.findFoodByCommercialDesc(foodKeyAdress,latitude,longitude);
        System.out.println(mostFood.size());
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
        List<Food> leastFood = foodRepository.findFoodByCommercialAsc(foodKeyAdress,latitude,longitude);
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
        List<Activity> mostActivity = activityRepository.findActivityByCommercialDesc(activityKeyAdress,latitude,longitude);
        String mostActivityCategory = mostActivity.get(0).getActivityCategory();
        List<BaseInfo> mostResActivity = new ArrayList<>();
        for(Activity activity : mostActivity){
            mostResActivity.add(BaseInfo.builder()
                    .id(activity.getActivityId())
                    .address(activity.getActivityAddress())
                    .latitude(activity.getActivityLatitude())
                    .longitude(activity.getActivityLongitude())
                    .name(activity.getActivityName())
                    .time(activity.getActivityTime())
                    .build());
        }

        //4. 가장적은 활동(asc)
        List<Activity> leastActivity = activityRepository.findActivityByCommercialAsc(activityKeyAdress,latitude,longitude);
        List<BaseInfo> leastResActivity = new ArrayList<>();
        String leastActivityCategory = "";
        if(leastActivity.isEmpty()){
            leastActivityCategory = foodCommercialRepository.findTopByFoodDongOrderByCnt(activityKeyAdress).getFoodCategory();
        }
        else{
            leastActivityCategory = leastActivity.get(0).getActivityCategory();
            for(Activity activity : leastActivity){
                leastResActivity.add(BaseInfo.builder()
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
