package com.ssafy.api.service;

import com.ssafy.api.response.ActivityRecGetRes;
import com.ssafy.api.response.MusicRecGetRes;

import java.util.List;

public interface RecService {
    List<MusicRecGetRes> getMusicRec(int key);
    List<ActivityRecGetRes> getActivityRec(int key);
}
