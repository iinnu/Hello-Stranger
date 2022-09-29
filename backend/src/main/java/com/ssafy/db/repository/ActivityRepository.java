package com.ssafy.db.repository;

import com.ssafy.db.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity,Integer> {
    //TODO 반경검색하기
    public List<String> findActivitiesByActivityCategory(String category);
}
