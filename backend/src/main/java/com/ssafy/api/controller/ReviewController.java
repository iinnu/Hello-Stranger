package com.ssafy.api.controller;

import com.ssafy.api.dto.ReviewGetResContent;
import com.ssafy.api.request.ReviewRegistReq;
import com.ssafy.api.response.ReviewGetRes;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(value = "리뷰 API", tags = {"Review"})
@RestController
@RequestMapping("/api/review")
public class ReviewController {

    @PostMapping()
    @ApiOperation(value = "리뷰 저장", notes = "다시보기에 사용될 리뷰 저장")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<Void> registReview(@RequestBody ReviewRegistReq reviewRegistReq){

        /*
        저장
        "reviewId" : "",
                "regDate" : "",
                "musicCategory" : "",
                "foodCategory" : "",
                "activityCategory" : ""
                ...
                erd 참고
         */

        // 리퀘스트 테스트
        List<ReviewRegistReq.ReviewReqConentStore> stores = new ArrayList<>();

        ReviewRegistReq.ReviewReqConentStore foodStore1 = ReviewRegistReq.ReviewReqConentStore.builder()
                .id(1)
                .choiceYN("Y")
                .build();

        ReviewRegistReq.ReviewReqConentStore foodStore2 = ReviewRegistReq.ReviewReqConentStore.builder()
                .id(2)
                .choiceYN("N")
                .build();


        stores.add(foodStore1);
        stores.add(foodStore2);

        ReviewRegistReq.ReviewReqContent food = ReviewRegistReq.ReviewReqContent.builder()
                .category("찐빵")
                .store(stores)
                .build();

        ReviewRegistReq.ReviewReqContent activity = ReviewRegistReq.ReviewReqContent.builder()
                .category("수영")
                .store(stores)
                .build();

        ReviewRegistReq save = ReviewRegistReq.builder()
                .title("타이틀")
                .musicId(1)
                .playlist_url("플레이리스트")
                .food(food)
                .activity(activity)
                .build();

        return ResponseEntity.status(200).build();
    }


    @GetMapping()
    @ApiOperation(value = "리뷰 조회", notes = "리뷰 목록 확인")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<ReviewGetRes> getReview(){

        List<ReviewGetResContent> contents = new ArrayList<>();

        // auth로 가져오기
        for(int i = 1; i < 5; i++){
            ReviewGetResContent content = ReviewGetResContent.builder()
                    .reviewId(i)
                    .title("제목"+i)
                    .regDate("2022:09:15")
                    .musicCategory("Waves")
                    .foodCategory("떡볶이")
                    .activityCategory("호캉스")
                    .build();

            contents.add(content);
        }

        ReviewGetRes res = ReviewGetRes.builder()
                .contents(contents)
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
