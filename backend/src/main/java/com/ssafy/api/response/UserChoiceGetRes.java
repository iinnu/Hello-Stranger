package com.ssafy.api.response;

import com.ssafy.api.dto.UserChoiceGetResActivity;
import com.ssafy.api.dto.UserChoiceGetResFood;
import com.ssafy.db.entity.Music;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserChoiceGetRes {

    List<Music> music;
    List<UserChoiceGetResFood> food;
    List<UserChoiceGetResActivity> activity;
}
