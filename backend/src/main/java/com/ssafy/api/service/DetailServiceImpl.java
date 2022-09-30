package com.ssafy.api.service;

import com.ssafy.api.dto.DetailInfo;
import com.ssafy.db.entity.Activity;
import com.ssafy.db.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

@Service
public class DetailServiceImpl implements DetailService{

    @Autowired
    ActivityRepository activityRepository;

    @Override
    public DetailInfo getActivity(int activityId) {
        Activity activity = activityRepository.findByActivityId(activityId);

        String review = activity.getActivityReview();
        List<String> reviewList = new ArrayList<>();
        review.replace(".||.", "\n");
        StringTokenizer st = new StringTokenizer(review, "[>*}");
        while(st.hasMoreTokens()){
            reviewList.add(st.nextToken());
        }

        DetailInfo detailInfo = DetailInfo.builder()
                .id(activity.getActivityId())
                .name(activity.getActivityName())
                .category(activity.getActivityCategory())
                .address(activity.getActivityAddress())
                .latitude(activity.getActivityLatitude())
                .longitude(activity.getActivityLongitude())
                .rating(activity.getActivityRating())
                .imgUrl(activity.getActivityImgUrl())
                .review(reviewList)
                .tel(activity.getActivityTel())
                .time(activity.getActivityTime())
                .build();
        return detailInfo;
    }
}
