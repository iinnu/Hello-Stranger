package com.ssafy.api.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MusicRecGetRes {
     private int musicID;
     private String musicName;
     private String musicArtist;
     private String musicCategory;
     private String musicImgUrl;
}
