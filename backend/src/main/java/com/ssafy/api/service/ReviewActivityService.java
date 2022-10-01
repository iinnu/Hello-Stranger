package com.ssafy.api.service;

import com.ssafy.api.request.ReviewRegistReq;
import com.ssafy.db.entity.Review;

import java.util.List;

public interface ReviewActivityService {
    void createReviewActivity(Review review, List<ReviewRegistReq.ReviewReqConentStore> activityStores);
}
