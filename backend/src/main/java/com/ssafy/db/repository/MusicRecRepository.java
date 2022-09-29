package com.ssafy.db.repository;

import com.ssafy.db.entity.MusicRec;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicRecRepository extends JpaRepository<MusicRec, Integer> {
    public MusicRec findByUserId(int userId);
}
