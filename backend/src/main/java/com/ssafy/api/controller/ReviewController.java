package com.ssafy.api.controller;

import com.ssafy.api.dto.ReviewGetResContent;
import com.ssafy.api.request.ReviewRegistReq;
import com.ssafy.api.response.ReviewGetRes;
import com.ssafy.api.service.ReviewActivityService;
import com.ssafy.api.service.ReviewFoodService;
import com.ssafy.api.service.ReviewMusicService;
import com.ssafy.api.service.ReviewService;
import com.ssafy.common.auth.HelloStrangerUserDetails;
import com.ssafy.db.entity.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Api(value = "리뷰 API", tags = {"Review"})
@RestController
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @Autowired
    ReviewActivityService reviewActivityService;

    @Autowired
    ReviewFoodService reviewFoodService;

    @Autowired
    ReviewMusicService reviewMusicService;

    @PostMapping()
    @ApiOperation(value = "리뷰 저장", notes = "다시보기에 사용될 리뷰 저장")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<Void> registReview(@ApiIgnore Authentication authentication, @RequestBody ReviewRegistReq reviewRegistReq){

        HelloStrangerUserDetails userDetails = (HelloStrangerUserDetails)authentication.getDetails();
        User user = userDetails.getUser();

        int musicId = reviewRegistReq.getMusicId();
        String regDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy:MM:dd:HH:mm:ss"));
        String evalYN = "N";
        String title = reviewRegistReq.getTitle();
        String activityCategoryName = reviewRegistReq.getActivity().getCategory();
        String foodCategoryName = reviewRegistReq.getFood().getCategory();
        String playListUrl = reviewRegistReq.getPlaylist_url();

        Review review = reviewService.createReview(musicId, regDate, evalYN, title, activityCategoryName, foodCategoryName, user);

        //DB에 활동이 없어서 에러남
        List<ReviewRegistReq.ReviewReqConentStore> activityStores =  reviewRegistReq.getActivity().getStore();
//        reviewActivityService.createReviewActivity(review, activityStores);

        List<ReviewRegistReq.ReviewReqConentStore> foodStores =  reviewRegistReq.getFood().getStore();
        reviewFoodService.createReviewFood(review, foodStores);

        reviewMusicService.createReviewMusic(review, musicId, playListUrl);

        return ResponseEntity.status(200).build();
    }


    @GetMapping()
    @ApiOperation(value = "리뷰 조회", notes = "리뷰 목록 확인")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<ReviewGetRes> getReview(@ApiIgnore Authentication authentication){

        HelloStrangerUserDetails userDetails = (HelloStrangerUserDetails)authentication.getDetails();
        User user = userDetails.getUser();

        List<ReviewGetResContent> reviews = reviewService.getReviews(user);

        ReviewGetRes res = ReviewGetRes.builder()
                .contents(reviews)
                .build();

        return ResponseEntity.status(200).body(res);
    }

    @DeleteMapping("/{reviewId}")
    @ApiOperation(value = "리뷰 삭제", notes = "리뷰를 삭제합니다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<Void> deleteReview(@PathVariable int reviewId){

        // 유저랑 엮인거 삭제

        return ResponseEntity.status(200).build();
    }

}
