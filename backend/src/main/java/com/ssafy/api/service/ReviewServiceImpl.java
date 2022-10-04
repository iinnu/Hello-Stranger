package com.ssafy.api.service;

import com.ssafy.api.dto.ReviewGetResContent;
import com.ssafy.db.entity.*;
import com.ssafy.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
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
                    .evalYN(reviewAll.getEvalYN())
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

    @Override
    public String getEvalYN(List<ReviewGetResContent> reviews) throws ParseException {
        String evalYN = "N";
        for(int i = 0; i < reviews.size(); i++){
            if(reviews.get(i).getEvalYN().equals("N")){
                if(checkIs48hours(reviews.get(i))){
                    evalYN = "Y";
                    break;
                }
            }
        }
        return evalYN;
    }

    private boolean checkIs48hours(ReviewGetResContent reviewGetResContent) throws ParseException {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy:MM:dd:HH:mm:ss");
        Date reviewRegDate = formatter.parse(reviewGetResContent.getRegDate());

        String regDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy:MM:dd:HH:mm:ss"));
        Date nowDate = formatter.parse(regDate);

        Calendar regDatePlus2 = Calendar.getInstance();
        regDatePlus2.setTime(reviewRegDate);
        regDatePlus2.add(Calendar.DATE, 2);

        if(regDatePlus2.getTime().after(nowDate)){
            return true;
        } else { return false;}
    }

}
