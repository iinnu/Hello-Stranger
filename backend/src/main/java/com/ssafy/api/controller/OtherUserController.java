package com.ssafy.api.controller;

import com.ssafy.api.dto.BaseInfo;
import com.ssafy.api.dto.OtherUserSelectInfo;
import com.ssafy.api.response.FoodRecGetRes;
import com.ssafy.api.response.OtherUserSelectGetRes;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Api(value = "타유저 API", tags = {"OtherUserSelect"})
@RestController
@RequestMapping("/api/otheruser")
public class OtherUserController {
    @GetMapping()
    @ApiOperation(value = "타 유저 선택 결과 반환", notes = "타 유저가 선택했던 음악,음식,활동과 해당 장소 정보 리스트를 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<List<OtherUserSelectGetRes>> getOtherUserSelect(){
        List<OtherUserSelectGetRes> res = new ArrayList<>();
        for(int i=0;i<5;i++){
            OtherUserSelectInfo food = OtherUserSelectInfo.builder()
                    .id(i)
                    .address("food_address"+i)
                    .category("food_category"+i)
                    .ChoiceYN("Y")
                    .latitude(33.3333)
                    .longitude(123.3333)
                    .name("food_name"+i)
                    .time("food_time"+i)
                    .build();
            OtherUserSelectInfo activity = OtherUserSelectInfo.builder()
                    .id(i)
                    .address("activity_address"+i)
                    .category("activity_category"+i)
                    .ChoiceYN("Y")
                    .latitude(33.3333)
                    .longitude(123.3333)
                    .name("activity_name"+i)
                    .time("activity_time"+i)
                    .build();
            OtherUserSelectGetRes userSelect = OtherUserSelectGetRes.builder().playlistUrl("url"+i).food(food).activity(activity).build();
            res.add(userSelect);
        }
        return ResponseEntity.status(200).body(res);
    }
}
