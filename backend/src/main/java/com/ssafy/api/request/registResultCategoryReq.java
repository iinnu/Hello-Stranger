package com.ssafy.api.request;

import com.ssafy.api.dto.CategoryChoiceYN;
import lombok.Data;

import java.util.List;
@Data
public class registResultCategoryReq {
    private List<CategoryChoiceYN> music;
    private List<CategoryChoiceYN> food;
    private List<CategoryChoiceYN> activity;
}
