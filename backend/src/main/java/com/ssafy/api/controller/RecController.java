package com.ssafy.api.controller;

import com.ssafy.api.request.registResultCategoryReq;
import com.ssafy.api.response.BaseResponseBody;
import com.ssafy.api.response.getActivityRecRes;
import com.ssafy.api.response.getFoodRecRes;
import com.ssafy.api.response.getMusicRecRes;
import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Api(value = "추천 API", tags = {"Recommandation"})
@RestController
@RequestMapping("/api/rec")
public class RecController {
    @PostMapping()
    public ResponseEntity<? extends BaseResponseBody> registResultCategory(@RequestBody registResultCategoryReq resultCategory){
        if(resultCategory!=null){
            return ResponseEntity.status(200).body(BaseResponseBody.of(200,"결과 전달 성공"));
        }
        return ResponseEntity.status(200).body(BaseResponseBody.of(200,"결과 null값 전달"));
    }
    @GetMapping("/food/{key}")
    public ResponseEntity<List<getFoodRecRes>> getFoodRec(@PathVariable int key){

        List<getFoodRecRes> res = new ArrayList<>();
        for(int i=0; i<10;i++){
            res.add(getFoodRecRes.builder().a("a").build());
        }
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("/music/{key}")
    public ResponseEntity<List<getMusicRecRes>> getMusicRec(@PathVariable int key){
        List<getMusicRecRes> res = new ArrayList<>();
        for(int i=0; i<10;i++){
            res.add(getMusicRecRes.builder()
                    .musicID(i)
                    .musicName("name"+i)
                    .musicArtist("artist"+i)
                    .musicCategory("category")
                    .musicImgUrl("imgUrl"+i)
                    .build());
        }
        return ResponseEntity.status(200).body(res);
    }
    @GetMapping("/activity/{key}")
    public ResponseEntity<List<getActivityRecRes>> getActivityRec(@PathVariable int key){
        List<getActivityRecRes> res = new ArrayList<>();
        for(int i=0; i<10;i++){
            res.add(getActivityRecRes.builder().a("a").build());
        }
        return ResponseEntity.status(200).body(res);
    }

}
