package com.ssafy.db.repository;


import com.ssafy.api.response.FoodRecGetRes;
import com.ssafy.db.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food,Integer> {

    String query = "SELECT *,(6371*ACOS(COS(RADIANS(:latitude))*COS(RADIANS(f.food_latitude))*COS(RADIANS(f.food_longitude)-RADIANS(:longitude))\n" +
            "+SIN(RADIANS(:latitude))*SIN(RADIANS(f.food_latitude)))) AS distance from food f where f.food_category like :category\n" +
            "HAVING distance < :distance ;";
    //@Query(value = "delete from feedback f where f.video_seq = :videoSeq", nativeQuery = true)
    @Query(value =  query, nativeQuery = true)
    public List<Food> findFoodByDistance(@Param("distance")double distance, @Param("latitude")double latitude , @Param("longitude") double longitude, @Param("category")String category);
    Food findByFoodId(int foodId);


    String queryForCommercial = "select *,(6371*ACOS(COS(RADIANS(:latitude))*COS(RADIANS(f.food_latitude))*COS(RADIANS(f.food_longitude)-RADIANS(:longitude))+SIN(RADIANS(:latitude))*SIN(RADIANS(f.food_latitude)))) AS distance \n" +
            "from food f\n" +
            "where f.food_dong like :address \n" +
            "and f.food_category like (select fc.food_category from food_commercial fc where fc.food_dong like :address order by fc.cnt :sortKey limit 1)\n" +
            "order by distance limit 0,5;";

    @Query(value = queryForCommercial, nativeQuery = true)
    public List<Food> findFoodByCommercial(@Param("address") String address, @Param("latitude") double latitude, @Param("longitude") double longitude, @Param("sortKey") String sortKey);


}
