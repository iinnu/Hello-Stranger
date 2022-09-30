package com.ssafy.api.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.db.mapping.ActivityCategoryMapping;
import com.ssafy.db.mapping.FoodCategoryMapping;
import com.ssafy.db.mapping.MusicMapping;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserChoiceGetRes {

    @JsonIgnore
    List<MusicMapping> music;
    List<FoodCategoryMapping> food;
    List<ActivityCategoryMapping> activity;
}
