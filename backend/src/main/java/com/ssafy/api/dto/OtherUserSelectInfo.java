package com.ssafy.api.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OtherUserSelectInfo {
    private int id;
    private String category;
    private String name;
    private String address;
    private double latitude;
    private double longitude;
    private String time;
    private String ChoiceYN;
}
