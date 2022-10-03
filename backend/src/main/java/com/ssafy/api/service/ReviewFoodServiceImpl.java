package com.ssafy.api.service;

import com.ssafy.api.request.ReviewRegistReq;
import com.ssafy.db.entity.Food;
import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewFood;
import com.ssafy.db.repository.FoodRepository;
import com.ssafy.db.repository.ReviewFoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewFoodServiceImpl implements ReviewFoodService {
    @Autowired
    ReviewFoodRepository reviewFoodRepository;

    @Autowired
    FoodRepository foodRepository;

    @Override
    public void createReviewFood(Review review, List<ReviewRegistReq.ReviewReqConentStore> foodStores) {
        for (int i = 0; i < foodStores.size(); i++) {
            Food food = foodRepository.findByFoodId(foodStores.get(i).getId());
            ReviewFood reviewFood = new ReviewFood(review, food, foodStores.get(i).getChoiceYN());
            reviewFoodRepository.save(reviewFood);
        }
    }
}
