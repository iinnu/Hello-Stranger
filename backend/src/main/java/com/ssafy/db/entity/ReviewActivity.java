package com.ssafy.db.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "review_activity")
@NoArgsConstructor
public class ReviewActivity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_activity_id")
    int reviewActivityId;

    @ManyToOne
    @JoinColumn(name = "review_id")
    Review review;

    @ManyToOne
    @JoinColumn(name = "activity_id")
    Activity activity;

    @Column(name = "choice_YN")
    String choiceYN;

    public ReviewActivity(Review review, Activity activity, String choiceYN) {
        this.review = review;
        this.activity = activity;
        this.choiceYN = choiceYN;
    }
}
