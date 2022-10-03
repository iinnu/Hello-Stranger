package com.ssafy.db.repository;

import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewMusic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewMusicRepository extends JpaRepository<ReviewMusic, Long> {
    @Query(value = "SELECT music_id From review_music where review_id = :reviewId", nativeQuery = true)
    int getMusicIdByReviewId(@Param(value = "reviewId") int reviewId);

    ReviewMusic getReviewMusicByReview(Review review);
}
