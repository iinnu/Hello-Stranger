package com.ssafy.api.controller;

import com.ssafy.api.dto.DetailInfo;
import com.ssafy.api.dto.SelectInfo;
import com.ssafy.api.request.DetailRatingRegistReq;
import com.ssafy.api.response.SelectGetRes;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Api(value = "상세조회 API", tags = {"Detail"})
@RestController
@RequestMapping("/api/detail")
public class DetailController {

    @GetMapping()
    @ApiOperation(value = "유저 선택 결과 반환", notes = "유저가 선택했던 음악,음식,활동과 해당 장소 정보 리스트를 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<SelectGetRes> getDetailSelect(){

        SelectInfo food = SelectInfo.builder()
                .id(1)
                .address("food_address")
                .category("food_category")
                .ChoiceYN("Y")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("food_name")
                .time("food_time")
                .build();
        SelectInfo activity = SelectInfo.builder()
                .id(1)
                .address("activity_address")
                .category("activity_category")
                .ChoiceYN("Y")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("activity_name")
                .time("activity_time")
                .build();
        SelectGetRes res = SelectGetRes.builder()
                .title("제목")
                .playlistUrl("url")
                .food(food)
                .activity(activity)
                .build();

        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("activity/{activityId}")
    @ApiOperation(value = "유저 활동 상세 조회", notes = "유저가 활동 가게 확인")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<DetailInfo> getDetailActivity(@PathVariable int activityId){

        ArrayList<String> review = new ArrayList<>();
        review.add("리뷰1");
        review.add("리뷰2");

        DetailInfo res = DetailInfo.builder()
                .id(1)
                .address("address")
                .category("category")
                .choiceYN("Y")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("name")
                .time("time")
                .rating("3.5")
                .imgUrl("이미지url")
                .review(review)
                .tel("전화번호")
                .desc("설명")
                .build();

        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("activity/{foodId}")
    @ApiOperation(value = "유저 활동 상세 조회", notes = "유저가 활동 가게 확인")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<DetailInfo> getDetailFood(@PathVariable int foodId){

        ArrayList<String> review = new ArrayList<>();
        review.add("리뷰1");
        review.add("리뷰2");

        DetailInfo res = DetailInfo.builder()
                .id(1)
                .address("address")
                .category("category")
                .choiceYN("Y")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("name")
                .time("time")
                .rating("3.5")
                .imgUrl("이미지url")
                .review(review)
                .tel("전화번호")
                .desc("설명")
                .build();

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
