package com.ssafy.api.request;

import lombok.Data;

@Data
public class UserRegistReq {
    // String idToken;
    String email;
    String nickname;
    String img;
}
