package com.ssafy.api.response;

import com.ssafy.api.dto.SelectInfo;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SelectGetRes {
    String title;
    String playlistUrl;
    SelectInfo food;
    SelectInfo activity;
}
