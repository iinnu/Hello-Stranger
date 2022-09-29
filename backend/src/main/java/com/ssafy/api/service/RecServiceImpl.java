package com.ssafy.api.service;

import com.ssafy.api.response.ActivityRecGetRes;
import com.ssafy.api.response.MusicRecGetRes;
import com.ssafy.db.entity.Music;
import com.ssafy.db.repository.ActivityRecRepository;
import com.ssafy.db.repository.ActivityRepository;
import com.ssafy.db.repository.MusicRecRepository;
import com.ssafy.db.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecServiceImpl implements RecService{
    @Autowired
    ActivityRecRepository activityRecRepository;
    @Autowired
    ActivityRepository activityRepository;
    @Autowired
    MusicRepository musicRepository;
    @Autowired
    MusicRecRepository musicRecRepository;

    @Override
    public List<MusicRecGetRes> getMusicRec(int key) {
        //TODO 시큐리티 적용
        int userId=1;
        int start = 10*key;
        int recNum = 10;
        List<MusicRecGetRes> res = new ArrayList<>();
        String [] musicRecs = musicRecRepository.findByUserId(userId).getMusic().split(" ");
        for(int i=start; i<start+recNum;i++){
            Music music = musicRepository.findById(Integer.parseInt(musicRecs[i])).get();
            res.add(MusicRecGetRes.builder()
                    .musicID(music.getMusicId())
                    .musicName(music.getMusicName())
                    .musicArtist(music.getMusicArtist())
                    .musicImgUrl(music.getMusicImgUrl())
                    .build());
        }
        //
        return res;
    }

    @Override
    public List<ActivityRecGetRes> getActivityRec(int key) {
        List<ActivityRecGetRes> res = new ArrayList<>();
        //TODO userId 등록, 구분자 등록
        String [] activityRecs = activityRecRepository.findByUserId(0).split("");
        for(int i=0; i<activityRecs.length; i++){

        }
        return res;
    }
}
