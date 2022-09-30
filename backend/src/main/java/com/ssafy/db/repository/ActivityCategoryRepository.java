package com.ssafy.db.repository;

import com.ssafy.db.entity.ActivityCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityCategoryRepository extends JpaRepository<ActivityCategory, Long> {
    ActivityCategory getActivityCategoryByCategoryName(String categoryName);
}
