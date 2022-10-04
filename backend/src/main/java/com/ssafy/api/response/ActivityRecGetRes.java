package com.ssafy.api.response;

import com.ssafy.api.dto.BaseInfo;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ActivityRecGetRes {
    private String activityCategory;
    private String imgUrl;
    private List<BaseInfo> store;
}
