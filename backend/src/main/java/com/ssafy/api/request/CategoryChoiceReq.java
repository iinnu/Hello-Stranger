package com.ssafy.api.request;

import com.ssafy.api.dto.CategoryLikeYN;
import com.ssafy.api.dto.IdLikeYN;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CategoryChoiceReq {

    List<IdLikeYN> music;
    List<CategoryLikeYN> food;
    List<CategoryLikeYN> activity;
}
