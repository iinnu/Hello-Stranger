package com.ssafy.db.repository;

import com.ssafy.db.entity.ActivityCategory;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< backend/src/main/java/com/ssafy/db/repository/ActivityCategoryRepository.java
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityCategoryRepository extends JpaRepository<ActivityCategory, Long> {
    
    ActivityCategory getActivityCategoryByCategoryName(String categoryName);

    @Query(value = "select * from activity_category order by RAND() limit 5", nativeQuery = true)
    List<ActivityCategory> getCategoryList();

}
