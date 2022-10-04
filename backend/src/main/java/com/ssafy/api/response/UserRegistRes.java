package com.ssafy.api.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRegistRes {
    String accessToken;
    String isSignup;
}
