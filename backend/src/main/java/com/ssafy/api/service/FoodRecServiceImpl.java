package com.ssafy.api.service;

import com.ssafy.db.entity.FoodRec;
import com.ssafy.db.repository.FoodRecRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodRecServiceImpl implements FoodRecService{
    @Autowired
    FoodRecRepository foodRecRepository;

    @Override
    public void createFoodRec(int userId) {
        FoodRec foodRec = new FoodRec(userId);
        foodRecRepository.save(foodRec);
    }
}
