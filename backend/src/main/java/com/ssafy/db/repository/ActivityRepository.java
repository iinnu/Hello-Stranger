package com.ssafy.db.repository;

import com.ssafy.db.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity,Integer> {
    String query = "SELECT *,(6371*ACOS(COS(RADIANS(:latitude))*COS(RADIANS(a.activity_latitude))*COS(RADIANS(a.activity_longitude)-RADIANS(:longitude))\n" +
            "+SIN(RADIANS(:latitude))*SIN(RADIANS(a.activity_latitude)))) AS distance from activity a where a.activity_category like :category\n" +
            "HAVING distance < :distance ;";
    //@Query(value = "delete from feedback f where f.video_seq = :videoSeq", nativeQuery = true)
    @Query(value =  query, nativeQuery = true)
    public List<Activity> findActivityByDistance(@Param("distance")double distance, @Param("latitude")double latitude ,@Param("longitude") double longitude, @Param("category")String category);

    Activity findByActivityId(int activityId);

    String queryForCommercial = "select *,(6371*ACOS(COS(RADIANS(:latitude))*COS(RADIANS(f.activity_latitude))*COS(RADIANS(f.activity_longitude)-RADIANS(:longitude))+SIN(RADIANS(:latitude))*SIN(RADIANS(f.activity_latitude)))) AS distance \n" +
            "from activity f\n" +
            "where f.activity_dong like :address \n" +
            "and f.activity_category like (select fc.activity_category from activity_commercial fc where fc.activity_dong like :address order by fc.cnt :sortKey limit 1)\n" +
            "order by distance limit 0,5;";

    @Query(value = queryForCommercial, nativeQuery = true)
    public List<Activity> findActivityByCommercial(@Param("address") String address, @Param("latitude") double latitude, @Param("longitude") double longitude, @Param("sortKey") String sortKey);
}
