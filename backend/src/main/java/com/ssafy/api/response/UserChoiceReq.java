package com.ssafy.api.response;

import com.ssafy.api.dto.UserChoiceReqActivity;
import com.ssafy.api.dto.UserChoiceReqFood;
import com.ssafy.api.dto.UserChoiceReqMusic;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class UserChoiceReq extends BaseResponseBody{

    List<UserChoiceReqMusic> music;
    List<UserChoiceReqFood> food;
    List<UserChoiceReqActivity> activity;

    @Builder
    public UserChoiceReq(List<UserChoiceReqMusic> music, List<UserChoiceReqFood> food, List<UserChoiceReqActivity> activity) {
        this.music = music;
        this.food = food;
        this.activity = activity;
    }
}
