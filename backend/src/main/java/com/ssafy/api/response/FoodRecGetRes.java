package com.ssafy.api.response;

import com.ssafy.api.dto.BaseInfo;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class FoodRecGetRes {
    private String foodCategory;
    private String imgUrl;
    private List<BaseInfo> store;
}
