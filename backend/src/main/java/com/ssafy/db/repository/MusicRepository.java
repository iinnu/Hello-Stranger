package com.ssafy.db.repository;

import com.ssafy.db.entity.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MusicRepository extends JpaRepository<Music, Integer> {

    @Query(value = "select * from music order by RAND() limit 5", nativeQuery = true)
    List<Music> getCategoryList();
}
