package com.ssafy.api.response;

import com.ssafy.api.dto.OtherUserSelectInfo;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OtherUserSelectGetRes {
    String playlistUrl;
    OtherUserSelectInfo food;
    OtherUserSelectInfo activity;
}
