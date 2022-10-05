package com.ssafy.api.controller;

import com.ssafy.api.dto.*;
import com.ssafy.api.request.CategoryChoiceReq;
import com.ssafy.api.request.UserRegistReq;
import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.api.response.CommercialAreaGetRes;
import com.ssafy.api.response.UserChoiceGetRes;
import com.ssafy.api.response.UserRegistRes;
import com.ssafy.api.service.ActivityRecService;
import com.ssafy.api.service.FoodRecService;
import com.ssafy.api.service.MusicRecService;
import com.ssafy.api.service.UserService;
import com.ssafy.common.auth.HelloStrangerUserDetails;
import com.ssafy.common.util.JwtTokenUtil;
import com.ssafy.db.entity.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.io.File;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import static com.ssafy.common.python.CallPython.exePython;

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    MusicRecService musicRecService;

    @Autowired
    FoodRecService foodRecService;

    @Autowired
    ActivityRecService activityRecService;

    @PostMapping()
    @ApiOperation(value = "소셜로그인, 소셜회원가입", notes = "저장되지 않은 이메일 일 시에는 회원가입과 로그인을 시키고, 저장된 이메일 일 시에는 로그인 시켜준다")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//            @ApiResponse(code = 901, message = "유효하지 않은 값"),
    })
    public ResponseEntity<UserRegistRes> registUser(@RequestBody UserRegistReq userRegistReq){

        String email = userRegistReq.getEmail();
        String nickname = userRegistReq.getNickname();
        String img = userRegistReq.getImg();

        UserRegistRes res;

        //이미일 중복 확인
        User user = userService.getUserByUserEmail(userRegistReq.getEmail());

        // 없으면 회원가입
        if(user == null){
            user = userService.createUser(email, nickname, img);
            // 추천 테이블 생성
            musicRecService.createMusicRec(user.getUserId());
            activityRecService.createActivityRec(user.getUserId());
            foodRecService.createFoodRec(user.getUserId());
            String accessToken = JwtTokenUtil.getToken(email);
            res = UserRegistRes.builder()
                    .accessToken(accessToken)
                    .isSignup("Y")
                    .build();
        } else {
            // accessToken 반환
            String accessToken = JwtTokenUtil.getToken(email);
            res = UserRegistRes.builder()
                    .accessToken(accessToken)
                    .isSignup("N")
                    .build();
        }

        return ResponseEntity.status(200).body(res);
    }

    @DeleteMapping()
    @ApiOperation(value = "회원탈퇴", notes = "회원 탈퇴")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
//            @ApiResponse(code = 901, message = "유효하지 않은 값"),
    })
    public ResponseEntity<Void> deleteUser(@ApiIgnore Authentication authentication){
        // auth에서 가져오기
        HelloStrangerUserDetails userDetails = (HelloStrangerUserDetails)authentication.getDetails();
        User user = userDetails.getUser();

        // 탈퇴 처리
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/choice")
    @ApiOperation(value = "유저 취향 조사 목록", notes = "회원가입 시 유저의 취향조사에 필요한 음악/음식/활동 목록을 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<UserChoiceGetRes> getUserChoice(){
        UserChoiceGetRes res = userService.getUserChoiceList();
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
            return ResponseEntity.status(911).body(BaseResponseBody.of(911, "유효하지 않은 사용자입니다."));
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

        URL activityRecommend = getClass().getClassLoader().getResource("activity_contents_based.py");
        System.out.println(activityRecommend);
        String[] command = new String[2];
        command[0] = "python3";
        //command[1] = new File(activityRecommend.getPath()).getAbsolutePath();
        command[1] = "/rec/resources/activity_contents_based.py";


        try {
            exePython(command);
        } catch (Exception e) {
            e.printStackTrace();
        }

        URL foodRecommend = getClass().getClassLoader().getResource("food_contents_based.py");
        String[] command2 = new String[2];
        command2[0] = "python3";
        //command2[1] = new File(foodRecommend.getPath()).getAbsolutePath();
        command2[1] = "/rec/resources/food_contents_based.py";

        try {
            exePython(command2);
        } catch (Exception e) {
            e.printStackTrace();
        }

        URL musicRecommend = getClass().getClassLoader().getResource("music_contents_based.py");
        String[] command3 = new String[2];
        command3[0] = "python3";
        //command3[1] = new File(musicRecommend.getPath()).getAbsolutePath();
        command3[1] = "/rec/resources/music_contents_based.py";

        try {
            exePython(command3);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "정상적으로 저장되었습니다."));
    }
}
