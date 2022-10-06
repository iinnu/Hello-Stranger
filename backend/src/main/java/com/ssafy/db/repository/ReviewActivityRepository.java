package com.ssafy.db.repository;

import com.ssafy.db.entity.Activity;
import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewActivity;
import com.ssafy.db.entity.ReviewFood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewActivityRepository extends JpaRepository<ReviewActivity, Long> {

    @Query(value = "SELECT activity_id From review_activity where review_id = :reviewId and choice_YN='Y'", nativeQuery = true)
    int getChoiceActivityIdByReviewId(@Param(value = "reviewId") int reviewId);

    @Query(value = "SELECT activity_id From review_activity where review_id = :reviewId and choice_YN='N'", nativeQuery = true)
    List<Integer> getNoChoiceActivityIdsByReviewId(@Param(value = "reviewId") int reviewId);


    ReviewActivity findByChoiceYNAndReview(String YN, Review review);
}

