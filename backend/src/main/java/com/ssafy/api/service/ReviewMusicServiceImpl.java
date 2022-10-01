package com.ssafy.api.service;

import com.ssafy.db.entity.Music;
import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewMusic;
import com.ssafy.db.repository.MusicRepository;
import com.ssafy.db.repository.ReviewMusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewMusicServiceImpl implements ReviewMusicService{

    @Autowired
    ReviewMusicRepository reviewMusicRepository;

    @Autowired
    MusicRepository musicRepository;

    @Override
    public void createReviewMusic(Review review, int musicId, String playListUrl) {
        Music music = musicRepository.findByMusicId(musicId);
        ReviewMusic reviewMusic = new ReviewMusic(review, music, playListUrl);
        reviewMusicRepository.save(reviewMusic);
    }

    @Override
    public String getReviewMusicPlayListUrlByReview(Review review) {
        ReviewMusic reviewMusic = reviewMusicRepository.getReviewMusicByReview(review);
        return reviewMusic.getPlayListUrl();
    }

}
