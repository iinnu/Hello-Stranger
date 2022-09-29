package com.ssafy.db.repository;

import com.ssafy.db.entity.ActivityRec;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRecRepository extends JpaRepository<ActivityRec,Integer> {
    public ActivityRec findByUserId(int userId);
}
