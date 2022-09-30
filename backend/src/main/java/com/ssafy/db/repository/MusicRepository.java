package com.ssafy.db.repository;

import com.ssafy.db.entity.Music;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MusicRepository extends JpaRepository<Music,Integer> {

    Music findByMusicId(int musicId);

}
