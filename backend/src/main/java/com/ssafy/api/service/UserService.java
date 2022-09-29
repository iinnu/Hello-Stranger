package com.ssafy.api.service;


import com.ssafy.api.request.CategoryChoiceReq;

public interface UserService {

    public int getUser(String userEmail);
    public void registUserChoice(int userId, CategoryChoiceReq categoryChoiceReq);
}
