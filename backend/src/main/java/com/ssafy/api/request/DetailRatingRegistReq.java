package com.ssafy.api.request;

import com.ssafy.api.dto.CategoryChoiceYN;
import com.ssafy.api.dto.IdChoiceYN;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DetailRatingRegistReq {
    IdChoiceYN music;
    CategoryChoiceYN food;
    CategoryChoiceYN activity;
}
