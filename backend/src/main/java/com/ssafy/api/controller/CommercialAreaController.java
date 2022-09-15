package com.ssafy.api.controller;

import com.ssafy.api.response.CommercialAreaGetRes;
import com.ssafy.api.response.OtherUserSelectGetRes;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
//
//@Api(value = "상권분석 API", tags = {"CommercialArea"})
//@RestController
//@RequestMapping("/api/commercialarea")
//public class CommercialAreaController {
//    public ResponseEntity<CommercialAreaGetRes> getCommercialArea{
//        return ResponseEntity.status(200).body(CommercialAreaGetRes.builder().mostActivityCategory().mostActivityCount().leastActivityCategory().leastActivityCount().leastFoodCategory().leastFoodCount().mostFoodCategory().mostFoodCount().build());
//    }
//}
