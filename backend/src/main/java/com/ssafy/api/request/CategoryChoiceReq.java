package com.ssafy.api.request;

import com.ssafy.api.dto.CategoryChoiceYN;
import lombok.Data;

import java.util.List;

@Data
public class CategoryChoiceReq {

    List<CategoryChoiceYN> music;
    List<CategoryChoiceYN> food;
    List<CategoryChoiceYN> activity;
}
