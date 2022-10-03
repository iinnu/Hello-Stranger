package com.ssafy.db.repository;

import com.ssafy.db.entity.FoodCategory;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< backend/src/main/java/com/ssafy/db/repository/FoodCategoryRepository.java
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodCategoryRepository extends JpaRepository<FoodCategory, Long> {
    
    FoodCategory getFoodCategoryByCategoryName(String categoryName);

    @Query(value = "select * from food_category order by RAND() limit 5", nativeQuery = true)
    List<FoodCategory> getCategoryList();

}
