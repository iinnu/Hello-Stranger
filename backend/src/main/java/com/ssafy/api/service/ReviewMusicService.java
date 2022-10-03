package com.ssafy.api.service;

import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewMusic;

public interface ReviewMusicService {
    public void createReviewMusic(Review review, int musicId, String playListUrl);

    String getReviewMusicPlayListUrlByReview(Review review);
}
