package com.ssafy.api.response;

import com.ssafy.api.dto.UserChoiceResActivity;
import com.ssafy.api.dto.UserChoiceResFood;
import com.ssafy.api.dto.UserChoiceResMusic;
import com.ssafy.api.response.BaseResponseBody;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserChoiceRes {

    List<UserChoiceResMusic> music;
    List<UserChoiceResFood> food;
    List<UserChoiceResActivity> activity;
}
