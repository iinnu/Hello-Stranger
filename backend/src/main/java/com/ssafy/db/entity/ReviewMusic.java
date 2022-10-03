package com.ssafy.db.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "review_music")
@NoArgsConstructor
public class ReviewMusic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_music_id")
    int reviewMusicId;

    @ManyToOne
    @JoinColumn(name = "review_id")
    Review review;

    @ManyToOne
    @JoinColumn(name = "music_id")
    Music music;

    @Column(name = "play_list_url")
    String PlayListUrl;

    public ReviewMusic(Review review, Music music, String playListUrl) {
        this.review = review;
        this.music = music;
        PlayListUrl = playListUrl;
    }
}
