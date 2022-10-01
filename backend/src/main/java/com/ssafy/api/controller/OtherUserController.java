package com.ssafy.api.controller;

import com.ssafy.api.dto.SelectInfo;
import com.ssafy.api.response.SelectGetRes;
import com.ssafy.api.response.SelectOtherUserGetRes;
import com.ssafy.api.service.OtherUserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Api(value = "타유저 API", tags = {"OtherUserSelect"})
@RestController
@RequestMapping("/api/otheruser")
public class OtherUserController {
    @Autowired
    OtherUserService otherUserService;

    @GetMapping()
    @ApiOperation(value = "타 유저 선택 결과 반환", notes = "타 유저가 선택했던 음악,음식,활동과 해당 장소 정보 리스트를 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<SelectOtherUserGetRes> getOtherUserSelect(){
        SelectOtherUserGetRes res = otherUserService.getOtherUser();
        return ResponseEntity.status(200).body(res);
    }

}
