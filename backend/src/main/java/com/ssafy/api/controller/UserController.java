package com.ssafy.api.controller;

import com.ssafy.api.dto.CategoryChoiceYN;
import com.ssafy.api.dto.UserChoiceResActivity;
import com.ssafy.api.dto.UserChoiceResFood;
import com.ssafy.api.dto.UserChoiceResMusic;
import com.ssafy.api.request.CategoryChoiceReq;
import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.api.response.UserChoiceRes;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/choice")
    @ApiOperation(value = "유저 취향 조사 목록", notes = "회원가입 시 유저의 취향조사에 필요한 음악/음식/활동 목록을 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<UserChoiceRes> getUserChoice(){
        UserChoiceResMusic music = UserChoiceResMusic.builder()
                .musicCategory("팝")
                .musicName("Waves")
                .musicArtist("Paige")
                .build();

        UserChoiceResFood food = UserChoiceResFood.builder()
                .foodCategory("떡볶이")
                .foodImgUrl("https://firebasestorage.googleapis.com/v0/b/viewdle-b6bf5.appspot.com/o/ch%40ssafy.com_profile?alt=media&token=e0584d41-eced-40bb-b79d-e395f1203855")
                .build();

        UserChoiceResActivity activity = UserChoiceResActivity.builder()
                .activityCategory("호캉스")
                .activityImgUrl("https://firebasestorage.googleapis.com/v0/b/viewdle-b6bf5.appspot.com/o/ch%40ssafy.com_profile?alt=media&token=e0584d41-eced-40bb-b79d-e395f1203855")
                .build();


        List<UserChoiceResMusic> musicList = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            musicList.add(music);
        }

        List<UserChoiceResFood> foodList = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            foodList.add(food);
        }

        List<UserChoiceResActivity> activityList = new ArrayList<>();
        for(int i = 0; i < 5; i++){
            activityList.add(activity);
        }

        UserChoiceRes res = UserChoiceRes.builder()
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
    })
    public ResponseEntity<? extends BaseResponseBody> registUserChoice(@RequestBody CategoryChoiceReq categoryChoiceReq){

        // 재구현시 함수화
        List<CategoryChoiceYN> music = categoryChoiceReq.getMusic();
        for(CategoryChoiceYN c : music){
            String yn = c.getChoiceYN();
            if("Y".equals(yn) || "N".equals(yn)) continue;
            else return ResponseEntity.status(901).body(BaseResponseBody.of(901, "유효하지 않은 값입니다."));
        }

        List<CategoryChoiceYN> food = categoryChoiceReq.getFood();
        for(CategoryChoiceYN c : food){
            String yn = c.getChoiceYN();
            if("Y".equals(yn) || "N".equals(yn)) continue;
            else return ResponseEntity.status(901).body(BaseResponseBody.of(901, "유효하지 않은 값입니다."));
        }
        
        List<CategoryChoiceYN> activity = categoryChoiceReq.getActivity();
        for(CategoryChoiceYN c : activity){
            String yn = c.getChoiceYN();
            if("Y".equals(yn) || "N".equals(yn)) continue;
            else return ResponseEntity.status(901).body(BaseResponseBody.of(901, "유효하지 않은 값입니다."));
        }
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "정상적으로 저장되었습니다."));
    }
}
