package com.ssafy.api.request;

import com.ssafy.api.dto.CategoryChoiceYN;
import com.ssafy.api.dto.IdChoiceYN;
import lombok.Data;

import java.util.List;

@Data
public class CategoryChoiceReq {

    List<IdChoiceYN> music;
    List<CategoryChoiceYN> food;
    List<CategoryChoiceYN> activity;
}
