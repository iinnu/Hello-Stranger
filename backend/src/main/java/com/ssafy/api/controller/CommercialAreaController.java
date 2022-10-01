package com.ssafy.api.controller;


import com.ssafy.api.response.CommercialAreaGetRes;
import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "상권분석 API", tags = {"CommercialArea"})
@RestController
@RequestMapping("/api/commercialarea/{userAddress}")
public class CommercialAreaController {
    public ResponseEntity<CommercialAreaGetRes> getCommercialArea (@PathVariable String userAddress){
        return null;

        //return ResponseEntity.status(200).body();
    }
}
