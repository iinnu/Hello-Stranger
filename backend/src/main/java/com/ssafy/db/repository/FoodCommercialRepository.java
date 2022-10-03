package com.ssafy.db.repository;

import com.ssafy.db.entity.FoodCommercial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodCommercialRepository extends JpaRepository<FoodCommercial,Integer> {
    public FoodCommercial findTopByFoodDongOrderByCnt(String foodDong);
}
