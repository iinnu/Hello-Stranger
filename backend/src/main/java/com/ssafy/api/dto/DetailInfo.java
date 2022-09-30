package com.ssafy.api.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class DetailInfo{
    int id;
    String category;
    String name;
    String address;
    double latitude;
    double longitude;
    String time;

    String rating;
    String imgUrl;
    String[] review;
    String tel;
    String desc;
    String choiceYN;
}
