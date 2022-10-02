package com.ssafy.api.service;

import com.ssafy.db.entity.MusicRec;
import com.ssafy.db.repository.MusicRecRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MusicRecServiceImpl implements MusicRecService{

    @Autowired
    MusicRecRepository musicRecRepository;

    @Override
    public void createMusicRec(int userId) {
        MusicRec musicRec = new MusicRec(userId);
        musicRecRepository.save(musicRec);
    }
}
