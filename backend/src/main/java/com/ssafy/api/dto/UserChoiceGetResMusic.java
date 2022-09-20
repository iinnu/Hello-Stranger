package com.ssafy.api.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserChoiceGetResMusic {

    int musicId;
    String musicName;
    String musicArtist;
    String musicImgUrl;
}
