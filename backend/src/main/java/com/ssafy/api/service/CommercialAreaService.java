package com.ssafy.api.service;

import org.springframework.stereotype.Service;
import com.ssafy.api.response.CommercialAreaGetRes;


@Service
public interface CommercialAreaService {
    public CommercialAreaGetRes getCommercialArea(String userAddress);
}
