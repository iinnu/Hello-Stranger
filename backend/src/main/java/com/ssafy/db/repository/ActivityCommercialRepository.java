package com.ssafy.db.repository;

import com.ssafy.db.entity.ActivityCommercial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityCommercialRepository extends JpaRepository <ActivityCommercial,Integer> {
}
