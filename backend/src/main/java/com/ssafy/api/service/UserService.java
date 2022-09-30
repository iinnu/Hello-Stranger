package com.ssafy.api.service;

import com.ssafy.db.entity.User;
import org.springframework.stereotype.Service;


import com.ssafy.api.request.CategoryChoiceReq;

public interface UserService {

    public int getUser(String userEmail);

    public void registUserChoice(int userId, CategoryChoiceReq categoryChoiceReq);

    User getUserByUserEmail(String userEmail);

    User createUser(String email, String nickname, String img);
}
