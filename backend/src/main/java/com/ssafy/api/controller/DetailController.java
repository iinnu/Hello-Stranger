package com.ssafy.api.controller;

import com.ssafy.api.dto.DetailInfo;
import com.ssafy.api.dto.SelectInfo;
import com.ssafy.api.request.DetailRatingRegistReq;
import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.api.response.SelectGetRes;
import com.ssafy.api.service.DetailService;
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
@RequestMapping("/api/detail")
public class DetailController {

    @Autowired
    DetailService detailService;

    @GetMapping()
    @ApiOperation(value = "유저 선택 결과 반환", notes = "유저가 선택했던 음악,음식,활동과 해당 장소 정보 리스트를 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<SelectGetRes> getDetailSelect(@PathVariable int reviewId){

        SelectInfo food_Y = SelectInfo.builder()
                .id(1)
                .address("food_address")
                .category("food_category")
                .ChoiceYN("Y")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("food_name")
                .time("food_time")
                .build();

        SelectInfo food_N = SelectInfo.builder()
                .id(1)
                .address("food_address")
                .category("food_category")
                .ChoiceYN("N")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("food_name")
                .time("food_time")
                .build();

        SelectInfo activity_Y = SelectInfo.builder()
                .id(1)
                .address("activity_address")
                .category("activity_category")
                .ChoiceYN("Y")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("activity_name")
                .time("activity_time")
                .build();

        SelectInfo activity_N = SelectInfo.builder()
                .id(1)
                .address("activity_address")
                .category("activity_category")
                .ChoiceYN("N")
                .latitude(33.3333)
                .longitude(123.3333)
                .name("activity_name")
                .time("activity_time")
                .build();

        List<SelectInfo> food = new ArrayList<>();
        food.add(food_N);
        food.add(food_N);

        List<SelectInfo> activity = new ArrayList<>();
        activity.add(activity_N);
        activity.add(activity_N);

        SelectGetRes res = SelectGetRes.builder()
                .title("제목")
                .playlistUrl("url")
                .choice_food(food_Y)
                .choice_activity(activity_Y)
                .food(food)
                .activity(activity)
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
