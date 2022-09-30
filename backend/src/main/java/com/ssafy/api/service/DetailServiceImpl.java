package com.ssafy.api.service;

import com.ssafy.api.dto.DetailInfo;
import com.ssafy.db.entity.Activity;
import com.ssafy.db.entity.Food;
import com.ssafy.db.repository.ActivityRepository;
import com.ssafy.db.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.sampled.ReverbType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.StringTokenizer;

@Service
public class DetailServiceImpl implements DetailService{

    @Autowired
    ActivityRepository activityRepository;
    
    @Autowired
    FoodRepository foodRepository;

    @Override
    public DetailInfo getActivity(int activityId) {
        Activity activity = activityRepository.findByActivityId(activityId);

//        String review = activity.getActivityReview();
//        List<String> reviewList = new ArrayList<>();
//        review = review.replace(".||.", " ");
//        StringTokenizer st = new StringTokenizer(review, "[>*}");
//        while(st.hasMoreTokens()){
//            reviewList.add(st.nextToken());
//        }
//
//        // review를 파싱해서 다시 담아줘야하므로 mapping interface 사용하지 않음
//        DetailInfo detailInfo = DetailInfo.builder()
//                .id(activity.getActivityId())
//                .name(activity.getActivityName())
//                .category(activity.getActivityCategory())
//                .address(activity.getActivityAddress())
//                .latitude(activity.getActivityLatitude())
//                .longitude(activity.getActivityLongitude())
//                .rating(activity.getActivityRating())
//                .imgUrl(activity.getActivityImgUrl())
//                .review(reviewList)
//                .tel(activity.getActivityTel())
//                .time(activity.getActivityTime())
//                .desc(activity.getActivityDesc().replace(".||.", " "))
//                .build();
//        return detailInfo;
        return null;
    }

    @Override
    public DetailInfo getFood(int foodId) {
        Food food = foodRepository.findByFoodId(foodId);

        String review = food.getFoodReview();
        review = review.replace(".||.", " ").replace("\"\"", "\"");
        review = review.startsWith("\"") ? review.substring(1, review.length()-1) : review;
        String[] results = review.split("\\[>\\*}");
//        System.out.println(Arrays.toString(results));
        
        DetailInfo detailInfo = DetailInfo.builder()
                .id(food.getFoodId())
                .name(food.getFoodName())
                .category(food.getFoodCategory())
                .address(food.getFoodAddress())
                .latitude(food.getFoodLatitude())
                .longitude(food.getFoodLongitude())
                .rating(food.getFoodRating())
                .imgUrl(food.getFoodImgUrl())
                .review(results)
                .tel(food.getFoodTel().replace("||", " "))
                .time(food.getFoodTime())
                .desc(food.getFoodDesc().replace(".||.", " ").replace("||", " ").replace("\r", ""))
                .build();
        return detailInfo;
    }
}
