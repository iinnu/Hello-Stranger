package com.ssafy.api.response;

import com.ssafy.api.dto.SimpleInfo;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class getFoodRecRes {
    private String foodCategory;
    private List<SimpleInfo> store;
}
