package com.ssafy.db.repository;

import com.ssafy.db.entity.FoodCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodCategoryRepository extends JpaRepository<FoodCategory, Long> {
    FoodCategory getFoodCategoryByCategoryName(String categoryName);
}
