package com.ssafy.db.repository;

import com.ssafy.db.entity.Review;
import com.ssafy.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> getReviewsByUser(User user);

    Review getReviewByReviewId(int reviewId);

    @Query(value = "SELECT * From review where User_user_id != :userId order by rand() limit 1", nativeQuery = true)
    Review getReviewByRandom(@Param("userId") int userId);
}
