package com.ssafy.api.controller;

import com.ssafy.api.dto.DetailInfo;
import com.ssafy.api.dto.SelectInfo;
import com.ssafy.api.request.DetailRatingRegistReq;
import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.api.response.SelectGetRes;
import com.ssafy.api.service.DetailService;
import com.ssafy.api.service.ReviewMusicService;
import com.ssafy.api.service.ReviewService;
import com.ssafy.db.entity.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(value = "상세조회 API", tags = {"Detail"})
@RestController
@RequestMapping("/api/detail/{reviewId}")
public class DetailController {

    @Autowired
    DetailService detailService;

    @Autowired
    ReviewService reviewService;

    @Autowired
    ReviewMusicService reviewMusicService;

    @GetMapping()
    @ApiOperation(value = "유저 선택 결과 반환", notes = "유저가 선택했던 음악,음식,활동과 해당 장소 정보 리스트를 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<SelectGetRes> getDetailSelect(@PathVariable int reviewId){

        Review review = reviewService.getReview(reviewId);

//        Activity choiceActivity = reviewService.getChoiceActivityIdByReviewId(reviewId);
//        List<Activity> activity = reviewService.getNoChoiceActivityIdsByReviewId(reviewId);
//
//        SelectInfo choiceActivityInfo = SelectInfo.builder()
//                .id(choiceActivity.getActivityId())
//                .category(choiceActivity.getActivityCategory())
//                .name(choiceActivity.getActivityName())
//                .address(choiceActivity.getActivityAddress())
//                .latitude(choiceActivity.getActivityLatitude())
//                .longitude(choiceActivity.getActivityLongitude())
//                .time(choiceActivity.getActivityTime())
//                .ChoiceYN("Y")
//                .build();
//
//        List<SelectInfo> noChoiceActivityInfos = new ArrayList<>();
//
//        for(int i = 0; i < activity.size(); i++){
//            SelectInfo tempActivityInfo = SelectInfo.builder()
//                    .id(activity.get(i).getActivityId())
//                    .category(activity.get(i).getActivityCategory())
//                    .name(activity.get(i).getActivityName())
//                    .address(activity.get(i).getActivityAddress())
//                    .latitude(activity.get(i).getActivityLatitude())
//                    .longitude(activity.get(i).getActivityLongitude())
//                    .time(activity.get(i).getActivityTime())
//                    .ChoiceYN("N")
//                    .build();
//            noChoiceActivityInfos.add(tempActivityInfo);
//        }

        Food choiceFood = reviewService.getChoicefoodIdByReviewId(reviewId);
        List<Food> food = reviewService.getNoChoicefoodIdsByReviewId(reviewId);

        SelectInfo choicefoodInfo = SelectInfo.builder()
                .id(choiceFood.getFoodId())
                .category(choiceFood.getFoodCategory())
                .name(choiceFood.getFoodName())
                .address(choiceFood.getFoodAddress())
                .latitude(choiceFood.getFoodLatitude())
                .longitude(choiceFood.getFoodLongitude())
                .time(choiceFood.getFoodTime())
                .ChoiceYN("Y")
                .build();

        List<SelectInfo> noChoiceFoodInfos = new ArrayList<>();

        for(int i = 0; i < food.size(); i++){
            SelectInfo tempFoodInfo = SelectInfo.builder()
                    .id(food.get(i).getFoodId())
                    .category(food.get(i).getFoodCategory())
                    .name(food.get(i).getFoodName())
                    .address(food.get(i).getFoodAddress())
                    .latitude(food.get(i).getFoodLatitude())
                    .longitude(food.get(i).getFoodLongitude())
                    .time(food.get(i).getFoodTime())
                    .ChoiceYN("N")
                    .build();
            noChoiceFoodInfos.add(tempFoodInfo);
        }

//        Music music = reviewService.getMusicIdByReviewId(reviewId);
        String playListUrl = reviewMusicService.getReviewMusicPlayListUrlByReview(review);

        SelectGetRes res = SelectGetRes.builder()
                .title(review.getTitle())
                .playlistUrl(playListUrl)
                .choice_food(choicefoodInfo)
//                .choice_activity(choiceActivityInfo)
                .food(noChoiceFoodInfos)
//                .activity(noChoiceActivityInfos)
                .build();

        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("activity/{activityId}")
    @ApiOperation(value = "유저 활동 상세 조회", notes = "유저가 활동 가게 확인")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 931, message = "DB에 없는 값"),
    })
    public ResponseEntity<?> getDetailActivity(@PathVariable int activityId){
        DetailInfo res = null;
        try {
            res = detailService.getActivity(activityId);
        } catch(Exception e){
            return ResponseEntity.status(931).body(BaseResponseBody.of(931, "DB에 등록되지 않는 값입니다."));
        }
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("food/{foodId}")
    @ApiOperation(value = "유저 활동 상세 조회", notes = "유저가 활동 가게 확인")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 931, message = "DB에 없는 값"),
    })
    public ResponseEntity<?> getDetailFood(@PathVariable int foodId){
        DetailInfo res = null;
        try{
            res = detailService.getFood(foodId);
        }catch(NullPointerException e){
            return ResponseEntity.status(931).body(BaseResponseBody.of(931, "DB에 등록되지 않는 값입니다."));
        }
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping("detail/{reviewId}/rating")
    @ApiOperation(value = "유저 상세조회에서 카데고리 평가", notes = "카테고리 평가")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<Void> registDetailRating(@PathVariable int reviewId, @RequestBody DetailRatingRegistReq detailRatingResigtReq){
        // 저장

        return ResponseEntity.status(200).build();
    }
}
