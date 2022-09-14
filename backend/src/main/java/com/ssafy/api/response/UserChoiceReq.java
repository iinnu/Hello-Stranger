package com.ssafy.api.response;

import com.ssafy.api.dto.UserChoiceReqActivity;
import com.ssafy.api.dto.UserChoiceReqFood;
import com.ssafy.api.dto.UserChoiceReqMusic;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class UserChoiceReq extends BaseResponseBody{

    List<UserChoiceReqMusic> musicList;
    List<UserChoiceReqFood> foodList;
    List<UserChoiceReqActivity> activityList;

    @Builder
    public UserChoiceReq(List<UserChoiceReqMusic> musicList, List<UserChoiceReqFood> foodList, List<UserChoiceReqActivity> activityList) {
        this.musicList = musicList;
        this.foodList = foodList;
        this.activityList = activityList;
    }
}
