package com.ssafy.db.repository;

import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> getReviewsByUser(User user);

    Review getReviewByReviewId(int reviewId);

    @Query(value = "SELECT review_id From review order by rand() limit 1", nativeQuery = true)
    Review getReviewByRandom();
}
