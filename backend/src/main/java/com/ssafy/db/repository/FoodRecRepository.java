package com.ssafy.db.repository;

import com.ssafy.db.entity.ActivityRec;
import com.ssafy.db.entity.Food;
import com.ssafy.db.entity.FoodRec;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRecRepository extends JpaRepository<FoodRec,Integer> {
    public FoodRec findByUserId(int userId);
}
