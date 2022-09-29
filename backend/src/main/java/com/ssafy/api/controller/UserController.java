package com.ssafy.api.controller;

import com.ssafy.api.dto.*;
import com.ssafy.api.request.CategoryChoiceReq;
import com.ssafy.api.request.UserRegistReq;
import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.api.response.CommercialAreaGetRes;
import com.ssafy.api.response.UserChoiceGetRes;
import com.ssafy.api.response.UserRegistRes;
import com.ssafy.api.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping()
    @ApiOperation(value = "소셜로그인, 소셜회원가입", notes = "저장되지 않은 이메일 일 시에는 회원가입과 로그인을 시키고, 저장된 이메일 일 시에는 로그인 시켜준다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//            @ApiResponse(code = 901, message = "유효하지 않은 값"),
    })
    public ResponseEntity<UserRegistRes> registUser(@RequestBody UserRegistReq userRegistReq){

        String idToken = userRegistReq.getIdToken();

        //이미일 중복 확인

        // 회원가입 처리

        // accessToken 반환
        String accessToken = "12345";
        UserRegistRes res = UserRegistRes.builder()
                .accessToken(accessToken)
                .build();
        return ResponseEntity.status(200).body(res);
    }

    @DeleteMapping()
    @ApiOperation(value = "회원탈퇴", notes = "회원 탈퇴")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//            @ApiResponse(code = 901, message = "유효하지 않은 값"),
    })
    public ResponseEntity<Void> deleteUser(){
        // auth에서 가져오기
        String accessToken;

        // 탈퇴 처리
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/choice")
    @ApiOperation(value = "유저 취향 조사 목록", notes = "회원가입 시 유저의 취향조사에 필요한 음악/음식/활동 목록을 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<UserChoiceGetRes> getUserChoice(){
        UserChoiceGetResMusic music = UserChoiceGetResMusic.builder()
                .musicId(1)
                .musicName("Waves")
                .musicArtist("Paige")
                .musicImgUrl("https://firebasestorage.googleapis.com/v0/b/viewdle-b6bf5.appspot.com/o/ch%40ssafy.com_profile?alt=media&token=e0584d41-eced-40bb-b79d-e395f1203855")
                .build();

        UserChoiceGetResFood food = UserChoiceGetResFood.builder()
                .foodCategory("떡볶이")
                .foodImgUrl("https://firebasestorage.googleapis.com/v0/b/viewdle-b6bf5.appspot.com/o/ch%40ssafy.com_profile?alt=media&token=e0584d41-eced-40bb-b79d-e395f1203855")
                .build();

        UserChoiceGetResActivity activity = UserChoiceGetResActivity.builder()
                .activityCategory("호캉스")
                .activityImgUrl("https://firebasestorage.googleapis.com/v0/b/viewdle-b6bf5.appspot.com/o/ch%40ssafy.com_profile?alt=media&token=e0584d41-eced-40bb-b79d-e395f1203855")
                .build();


        List<UserChoiceGetResMusic> musicList = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            musicList.add(music);
        }

        List<UserChoiceGetResFood> foodList = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            foodList.add(food);
        }

        List<UserChoiceGetResActivity> activityList = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            activityList.add(activity);
        }

        UserChoiceGetRes res = UserChoiceGetRes.builder()
                .music(musicList)
                .food(foodList)
                .activity(activityList)
                .build();
        return ResponseEntity.status(200).body(res);
    }


    @PostMapping("/choice")
    @ApiOperation(value = "유저 취향 선택", notes = "회원가입 시 취향조사에서 유저가 선택한 음악/음식/활동 목록을 저장한다 ")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 911, message = "유효하지 않은 사용자"),
            @ApiResponse(code = 901, message = "유효하지 않은 값, YN은 1 또는 -1로만 들어올 수 있음"),
    })
    public ResponseEntity<? extends BaseResponseBody> registUserChoice(@RequestBody CategoryChoiceReq categoryChoiceReq){

        int userId = 0;
        try {
            userId = userService.getUser(categoryChoiceReq.getUserEmail());
        } catch(Exception e){
            return ResponseEntity.status(601).body(BaseResponseBody.of(911, "유효하지 않은 사용자입니다."));
        }

        System.out.println(userId);

        // @valid 찾아볼 것
//        List<IdLikeYN> music = categoryChoiceReq.getMusic();
//        for(IdLikeYN like : music){
//            int yn = like.getLikeYN();
//            if(yn == 1 || yn == -1) continue;
//            else return ResponseEntity.status(901).body(BaseResponseBody.of(901, "유효하지 않은 값입니다."));
//        }
//
//        List<CategoryLikeYN> food = categoryChoiceReq.getFood();
//        for(CategoryLikeYN like : food){
//            int yn = like.getLikeYN();
//            if(yn == 1 || yn == -1) continue;
//            else return ResponseEntity.status(901).body(BaseResponseBody.of(901, "유효하지 않은 값입니다."));
//        }
//
//        List<CategoryLikeYN> activity = categoryChoiceReq.getActivity();
//        for(CategoryLikeYN like : activity){
//            int yn = like.getLikeYN();
//            if(yn == 1 || yn == -1) continue;
//            else return ResponseEntity.status(901).body(BaseResponseBody.of(901, "유효하지 않은 값입니다."));
//        }


        userService.registUserChoice(userId, categoryChoiceReq);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "정상적으로 저장되었습니다."));
    }

}
