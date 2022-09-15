package com.ssafy.api.request;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ReviewRegistReq {
    String playlist_url;
    ReviewReqContent food;
    ReviewReqContent activity;

    @Builder
    public static class ReviewReqContent {
        String category;
        List<ReviewReqConentStore> store;
    }

    @Builder
    public static class ReviewReqConentStore {
        int id;
        String choiceYN;
    }
}
