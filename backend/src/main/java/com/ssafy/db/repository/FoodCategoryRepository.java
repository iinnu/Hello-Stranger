package com.ssafy.db.repository;

import com.ssafy.db.entity.FoodCategory;
import com.ssafy.db.mapping.FoodCategoryMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodCategoryRepository extends JpaRepository<FoodCategory, Long> {

    @Query(value = "select * from food_category order by RAND() limit 5", nativeQuery = true)
    List<FoodCategoryMapping> getCategoryList();
}
