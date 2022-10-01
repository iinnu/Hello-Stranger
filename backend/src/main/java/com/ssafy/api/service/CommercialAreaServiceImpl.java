package com.ssafy.api.service;

import com.ssafy.api.response.CommercialAreaGetRes;
import com.ssafy.db.entity.ActivityCommercial;
import com.ssafy.db.repository.ActivityCommercialRepository;
import com.ssafy.db.repository.FoodCommercialRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class CommercialAreaServiceImpl implements CommercialAreaService{

    @Autowired
    FoodCommercialRepository foodCommercialRepository;

    @Autowired
    ActivityCommercialRepository activityCommercialRepository;

    @Override
    public CommercialAreaGetRes getCommercialArea(String userAddress) {
        //1. 가장많은 음식점

        //2. 가장적은 음식점

        //3, 가장많은 활동

        //4. 가장적은 활동동


        return null;    }
}
