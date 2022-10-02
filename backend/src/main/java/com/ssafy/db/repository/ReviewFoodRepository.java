package com.ssafy.db.repository;

import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.ReviewFood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewFoodRepository extends JpaRepository<ReviewFood, Long> {
    @Query(value = "SELECT food_id From review_food where review_id = :reviewId and choice_YN='Y'", nativeQuery = true)
    int getChoiceFoodIdByReviewId(@Param("reviewId") int reviewId);

    @Query(value = "SELECT food_id From review_food where review_id = :reviewId and choice_YN='N'", nativeQuery = true)
    List<Integer> getNoChoiceFoodIdsByReviewId(@Param("reviewId") int reviewId);

    ReviewFood findByChoiceYNAndReview(String YN, Review review);
}
