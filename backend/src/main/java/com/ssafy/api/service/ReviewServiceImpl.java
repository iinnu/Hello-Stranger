package com.ssafy.api.service;

import com.ssafy.api.dto.ReviewGetResContent;
import com.ssafy.db.entity.*;
import com.ssafy.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    ActivityCategoryRepository activityCategoryRepository;

    @Autowired
    FoodCategoryRepository foodCategoryRepository;

    @Autowired
    ReviewActivityRepository reviewActivityRepository;

    @Autowired
    ReviewFoodRepository reviewFoodRepository;

    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    FoodRepository foodRepository;

    @Autowired
    MusicRepository musicRepository;

    @Autowired
    ReviewMusicRepository reviewMusicRepository;



    @Override
    public Review createReview(int musicId, String regDate, String evalYN, String title, String activityCategoryName, String foodCategoryName, User user) {
        ActivityCategory activityCategory = activityCategoryRepository.getActivityCategoryByCategoryName(activityCategoryName);
        FoodCategory foodCategory = foodCategoryRepository.getFoodCategoryByCategoryName(foodCategoryName);

        Review review = new Review(musicId, regDate, evalYN, title, activityCategory, foodCategory, user);
        return reviewRepository.save(review);
    }

    @Override
    public List<ReviewGetResContent> getReviews(User user) {
        List<Review> reviewsAll = reviewRepository.getReviewsByUser(user);
        List<ReviewGetResContent> reviews = new ArrayList<>();

        for(int i = 0; i < reviewsAll.size(); i++){
            Review reviewAll = reviewsAll.get(i);
            ReviewGetResContent content = ReviewGetResContent.builder()
                    .reviewId(reviewAll.getReviewId())
                    .title(reviewAll.getTitle())
                    .regDate(reviewAll.getRegDate())
                    .musicId(reviewAll.getMusicId())
                    .foodCategoryName(reviewAll.getFoodCategory().getCategoryName())
                    .activityCategoryName(reviewAll.getActivityCategory().getCategoryName())
                    .build();
            reviews.add(content);
        }

        return reviews;

    }

    @Override
    public Review getReview(int reviewId) {
        Review review = reviewRepository.getReviewByReviewId(reviewId);
        return review;
    }

    @Override
    public Activity getChoiceActivityIdByReviewId(int reviewId) {
        int activityId = reviewActivityRepository.getChoiceActivityIdByReviewId(reviewId);
        Activity activity = activityRepository.findByActivityId(activityId);
        return activity;
    }

    @Override
    public List<Activity> getNoChoiceActivityIdsByReviewId(int reviewId) {
        List<Integer> activityIds = reviewActivityRepository.getNoChoiceActivityIdsByReviewId(reviewId);
        List<Activity> activities = new ArrayList<>();
        for(int i = 0; i < activityIds.size(); i++){
            Activity activity = activityRepository.findByActivityId(activityIds.get(i));
            activities.add(activity);
        }
        return activities;
    }

    @Override
    public Food getChoicefoodIdByReviewId(int reviewId) {
        int foodId = reviewFoodRepository.getChoiceFoodIdByReviewId(reviewId);
        Food food = foodRepository.findByFoodId(foodId);
        return food;
    }

    @Override
    public List<Food> getNoChoicefoodIdsByReviewId(int reviewId) {
        List<Integer> foodIds = reviewFoodRepository.getNoChoiceFoodIdsByReviewId(reviewId);
        List<Food> foods = new ArrayList<>();
        for(int i = 0; i < foodIds.size(); i++){
            Food food = foodRepository.findByFoodId(foodIds.get(i));
            foods.add(food);
        }
        return foods;
    }

    @Override
    public Music getMusicIdByReviewId(int reviewId) {
        int musicId = reviewMusicRepository.getMusicIdByReviewId(reviewId);
        Music music = musicRepository.findByMusicId(musicId);
        return music;
    }

    @Override
    public void updateReviewEvalYNbyReviewId(int reviewId) {
        Review review = reviewRepository.getReviewByReviewId(reviewId);
        reviewRepository.save(review.withEvalYN("Y"));
    }

}
