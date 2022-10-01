package com.ssafy.api.controller;


import com.ssafy.api.response.CommercialAreaGetRes;
import com.ssafy.api.service.CommercialAreaService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Api(value = "상권분석 API", tags = {"CommercialArea"})
@RestController
@RequestMapping("/api/commercialarea/{userAddress}/{latitude}/{longitude}")
public class CommercialAreaController {
    @Autowired
    CommercialAreaService commercialAreaService;
    public ResponseEntity<CommercialAreaGetRes> getCommercialArea (@PathVariable Map<String,String> request){
        String address = request.get("userAdresss");
        double latitude = Double.parseDouble(request.get("latitude"));
        double longitude = Double.parseDouble(request.get("longitude"));

        return ResponseEntity.status(200).body(commercialAreaService.getCommercialArea(address,latitude,longitude));
    }
}
