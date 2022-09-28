package com.ssafy.db.repository;

import com.ssafy.db.entity.ActivityUser;
import com.ssafy.db.entity.FoodUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodUserRepository extends JpaRepository<FoodUser, Long> {
}
