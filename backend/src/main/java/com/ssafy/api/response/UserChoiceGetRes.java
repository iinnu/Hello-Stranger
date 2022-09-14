package com.ssafy.api.response;

import com.ssafy.api.dto.UserChoiceGetResActivity;
import com.ssafy.api.dto.UserChoiceGetResFood;
import com.ssafy.api.dto.UserChoiceGetResMusic;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserChoiceGetRes {

    List<UserChoiceGetResMusic> music;
    List<UserChoiceGetResFood> food;
    List<UserChoiceGetResActivity> activity;
}
