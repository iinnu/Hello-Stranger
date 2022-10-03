package com.ssafy.api.response;

import com.ssafy.api.dto.DetailInfo;
import com.ssafy.api.dto.SelectInfo;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class SelectOtherUserGetRes {
    String title;
    DetailInfo food;
    DetailInfo activity;
}
