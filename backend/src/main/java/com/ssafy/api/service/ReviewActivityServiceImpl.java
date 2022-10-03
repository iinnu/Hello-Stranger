package com.ssafy.api.service;

import com.ssafy.api.request.ReviewRegistReq;
import com.ssafy.db.entity.Activity;
import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewActivity;
import com.ssafy.db.repository.ActivityRepository;
import com.ssafy.db.repository.ReviewActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewActivityServiceImpl implements ReviewActivityService {

    @Autowired
    ReviewActivityRepository reviewActivityRepository;
    @Autowired
    ActivityRepository activityRepository;

    @Override
    public void createReviewActivity(Review review, List<ReviewRegistReq.ReviewReqConentStore> activityStores) {
        for (int i = 0; i < activityStores.size(); i++) {
            Activity activity = activityRepository.findByActivityId(activityStores.get(i).getId());
            ReviewActivity reviewActivity = new ReviewActivity(review, activity, activityStores.get(i).getChoiceYN());
            reviewActivityRepository.save(reviewActivity);
        }
    }
}
