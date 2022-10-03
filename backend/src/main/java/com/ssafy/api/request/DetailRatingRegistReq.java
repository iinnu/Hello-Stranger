package com.ssafy.api.request;

import com.ssafy.api.dto.CategoryChoiceYN;
import com.ssafy.api.dto.CategoryLikeYN;
import com.ssafy.api.dto.IdChoiceYN;
import com.ssafy.api.dto.IdLikeYN;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DetailRatingRegistReq {
    IdLikeYN music;
    CategoryLikeYN food;
    CategoryLikeYN activity;
}
