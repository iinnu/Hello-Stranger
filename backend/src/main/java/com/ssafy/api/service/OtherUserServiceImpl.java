package com.ssafy.api.service;

import com.ssafy.api.dto.DetailInfo;
import com.ssafy.api.dto.SelectInfo;
import com.ssafy.api.response.SelectOtherUserGetRes;
import com.ssafy.db.entity.Activity;
import com.ssafy.db.entity.Food;
import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewFood;
import com.ssafy.db.repository.*;
import org.hibernate.sql.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OtherUserServiceImpl implements OtherUserService {

    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    ReviewFoodRepository reviewFoodRepository;
    @Autowired
    ActivityRepository activityRepository;

    @Override
    public SelectOtherUserGetRes getOtherUser() {
        // 랜덤한 리뷰 뽑기
        // 리뷰 타이틀 추가, review.findById(17),
        //TODO 랜덤리뷰가져오기로 변경
        //TODO 컨트롤러 null 리턴처리
        Review randomReview = reviewRepository.getReviewByRandom();
        //Review randomReview = reviewRepository.getReviewByReviewId(17);
        if(randomReview == null){
            return null;
        }
        //랜덤한 리뷰에서 식당 봅기
        ReviewFood reviewFood = reviewFoodRepository.findByChoiceYNAndReview("Y",randomReview);
        Food food = reviewFood.getFood();
        String review = food.getFoodReview();
        review = review.replace(".||.", " ").replace("\"\"", "\"");
        review = review.startsWith("\"") ? review.substring(1, review.length()-1) : review;
        String[] results = review.split("\\[>\\*}");

        DetailInfo foodDetail = DetailInfo.builder()
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

        //랜덤한 리뷰에서 활동 뽑기
        Activity activity = activityRepository.findByActivityId(1);

        review = activity.getActivityReview();
        review = review.replace(".||.", " ").replace("\"\"", "\"");
        review = review.startsWith("\"") ? review.substring(1, review.length()-1) : review;
        results = review.split("\\[>\\*}");

        // review를 파싱해서 다시 담아줘야하므로 mapping interface 사용하지 않음
        DetailInfo activityDetail = DetailInfo.builder()
                .id(activity.getActivityId())
                .name(activity.getActivityName())
                .category(activity.getActivityCategory())
                .address(activity.getActivityAddress())
                .latitude(activity.getActivityLatitude())
                .longitude(activity.getActivityLongitude())
                .rating(activity.getActivityRating())
                .imgUrl(activity.getActivityImgUrl())
                .review(results)
                .tel(activity.getActivityTel().replace("||", " "))
                .time(activity.getActivityTime())
                .desc(activity.getActivityDesc().replace(".||.", " ").replace("||", " ").replace("\r", ""))
                .build();

        SelectOtherUserGetRes res = SelectOtherUserGetRes.builder()
                .activity(activityDetail)
                //.activity(foodDetail)
                .food(foodDetail)
                .title(randomReview.getTitle())
                .build();
        return res;
    }
}
