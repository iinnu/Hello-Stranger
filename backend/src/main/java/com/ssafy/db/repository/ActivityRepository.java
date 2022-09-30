package com.ssafy.db.repository;

import com.ssafy.db.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity,Integer> {
    //TODO 반경검색하기
    String query = "SELECT *,(6371*ACOS(COS(RADIANS(:latitude))*COS(RADIANS(a.activity_latitude))*COS(RADIANS(a.activity_longitude)-RADIANS(:longitude))\n" +
            "+SIN(RADIANS(:latitude))*SIN(RADIANS(a.activity_latitude)))) AS distance from activity a where a.activity_category like :category\n" +
            "HAVING distance < :distance ;";
    //@Query(value = "delete from feedback f where f.video_seq = :videoSeq", nativeQuery = true)
    @Query(value =  query, nativeQuery = true)
    public List<Activity> findActivityByDistance(@Param("distance")double distance, @Param("latitude")double latitude ,@Param("longitude") double longitude, @Param("category")String category);

    Activity findByActivityId(int activityId);
}
