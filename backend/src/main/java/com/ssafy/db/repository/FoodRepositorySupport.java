package com.ssafy.db.repository;


import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.db.entity.Food;
import com.ssafy.db.entity.Review;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import static com.ssafy.db.entity.QFood.food;
import static com.ssafy.db.entity.QReviewFood.reviewFood;



@Repository
@RequiredArgsConstructor
public class FoodRepositorySupport {
    private  final JPAQueryFactory jpaQueryFactory;


    //select * from food
    //where food_id = (select food_id from review_food where choice_YN = "Y" and review_id = 17);
    public Food findFoodByOtherUsers(Review randomReview){
        return jpaQueryFactory
                .selectFrom(food)
                .where(food.eq(JPAExpressions
                        .select(reviewFood.food)
                        .from(reviewFood)
                        .where(reviewFood.review.eq(randomReview)
                                .and(reviewFood.choiceYN.eq("Y")))
                )).fetchOne();
    }


}
