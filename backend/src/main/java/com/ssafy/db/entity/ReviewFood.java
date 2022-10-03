package com.ssafy.db.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "review_food")
@NoArgsConstructor
public class ReviewFood{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_food_id")
    int reviewFoodId;

    @ManyToOne
    @JoinColumn(name = "review_id")
    Review review;

    @ManyToOne
    @JoinColumn(name = "food_id")
    Food food;

    @Column(name = "choice_YN")
    String choiceYN;

    public ReviewFood(Review review, Food food, String choiceYN) {
        this.review = review;
        this.food = food;
        this.choiceYN = choiceYN;
    }
}
