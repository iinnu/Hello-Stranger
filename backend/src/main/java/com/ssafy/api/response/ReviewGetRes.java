package com.ssafy.api.response;

import com.ssafy.api.dto.ReviewGetResContent;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ReviewGetRes {

    List<ReviewGetResContent> contents;

}
