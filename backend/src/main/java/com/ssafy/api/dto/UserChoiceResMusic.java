package com.ssafy.api.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserChoiceResMusic {

    String musicCategory;
    String musicName;
    String musicArtist;
}
