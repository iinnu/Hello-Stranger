package com.ssafy.api.service;

import com.ssafy.api.response.SelectOtherUserGetRes;
import com.ssafy.db.entity.User;

public interface OtherUserService {
    public SelectOtherUserGetRes getOtherUser(User user);
}
