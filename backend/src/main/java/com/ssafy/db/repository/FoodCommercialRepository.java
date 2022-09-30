package com.ssafy.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodCommercialRepository extends JpaRepository<FoodCommercial,Integer> {
}
