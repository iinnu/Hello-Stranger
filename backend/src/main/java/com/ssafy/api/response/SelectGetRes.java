package com.ssafy.api.response;

import com.ssafy.api.dto.SelectInfo;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SelectGetRes {
    String title;
    int musicId;
    String playlistUrl;
    SelectInfo choice_food;
    SelectInfo choice_activity;
    List<SelectInfo> food;
    List<SelectInfo> activity;
}
