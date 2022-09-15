package com.ssafy.api.controller;

import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.api.response.CommercialAreaGetRes;
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

import java.util.List;
import java.util.Map;

@Api(value = "상권분석 API", tags = {"CommercialArea"})
@RestController
@RequestMapping("/api/commercialarea")
public class CommercialAreaController {

    @GetMapping("/{latitude}/{longitude}/{distance}")
    @ApiOperation(value = "상권분석", notes = "사용자 근처 상권 분석")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<CommercialAreaGetRes> getCommercialArea(@PathVariable Map<String,Double> map){
        CommercialAreaGetRes res = CommercialAreaGetRes.builder()
                .mostActivityCategory("mostActivity")
                .mostActivityCount(200)
                .leastActivityCategory("leastActivity")
                .leastActivityCount(2)
                .leastFoodCategory("leastFood")
                .leastFoodCount(3)
                .mostFoodCategory("mostFood")
                .mostFoodCount(10)
                .dongName("인동")
                .build();
        return ResponseEntity.status(200).body(res);
    }

}
