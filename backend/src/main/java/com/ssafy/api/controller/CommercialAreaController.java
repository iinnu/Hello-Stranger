package com.ssafy.api.controller;


import com.ssafy.api.response.CommercialAreaGetRes;
import com.ssafy.api.service.CommercialAreaService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Api(value = "상권분석 API", tags = {"CommercialArea"})
@RestController
@RequestMapping("/api/commercialarea")
public class CommercialAreaController {
    @Autowired
    CommercialAreaService commercialAreaService;

    @GetMapping("/{userAdress}/{latitude}/{longitude}")
    @ApiOperation(value = "상권분석 결과 확인", notes = "사용자 위치 근처 상관 분석 결과를 반환한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
    })
    public ResponseEntity<CommercialAreaGetRes> getCommercialArea (@PathVariable Map<String,String> request){
        String address = request.get("userAdress");
        double latitude = Double.parseDouble(request.get("latitude"));
        double longitude = Double.parseDouble(request.get("longitude"));

        return ResponseEntity.status(200).body(commercialAreaService.getCommercialArea(address,latitude,longitude));
    }
}
