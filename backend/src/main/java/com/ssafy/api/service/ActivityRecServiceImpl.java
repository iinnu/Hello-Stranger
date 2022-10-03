package com.ssafy.api.service;

import com.ssafy.db.entity.ActivityRec;
import com.ssafy.db.repository.ActivityRecRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityRecServiceImpl implements ActivityRecService{

    @Autowired
    ActivityRecRepository activityRecRepository;
    @Override
    public void createActivityRec(int userId) {
        ActivityRec activityRec = new ActivityRec(userId);
        activityRecRepository.save(activityRec);
    }
}
