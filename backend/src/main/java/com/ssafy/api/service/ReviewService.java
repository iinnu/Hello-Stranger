package com.ssafy.api.service;

import com.ssafy.api.dto.ReviewGetResContent;
import com.ssafy.db.entity.*;

import java.text.ParseException;
import java.util.List;

public interface ReviewService {
    Review createReview(int musicId, String regDate, String evalYN, String title, String activityCategoryName, String foodCategoryName, User user);

    List<ReviewGetResContent> getReviews(User user);

    Review getReview(int reviewId);

    Activity getChoiceActivityIdByReviewId(int reviewId);

    List<Activity> getNoChoiceActivityIdsByReviewId(int reviewId);

    Food getChoicefoodIdByReviewId(int reviewId);

    List<Food> getNoChoicefoodIdsByReviewId(int reviewId);

    Music getMusicIdByReviewId(int reviewId);

    void updateReviewEvalYNbyReviewId(int reviewId);

    String getEvalYN(List<ReviewGetResContent> reviews) throws ParseException;
}
