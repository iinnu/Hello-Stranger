package com.ssafy.api.service;

import com.ssafy.api.dto.CategoryLikeYN;
import com.ssafy.api.dto.IdLikeYN;
import com.ssafy.api.request.CategoryChoiceReq;
import com.ssafy.db.entity.ActivityUser;
import com.ssafy.db.entity.FoodUser;
import com.ssafy.db.entity.MusicUser;
import com.ssafy.db.repository.ActivityUserRepository;
import com.ssafy.db.repository.FoodUserRepository;
import com.ssafy.db.repository.MusicUserRepository;
import com.ssafy.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

import com.ssafy.db.entity.User;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    ActivityUserRepository activityUserRepository;

    @Autowired
    FoodUserRepository foodUserRepository;

    @Autowired
    MusicUserRepository musicUserRepository;

    @Override
    public int getUser(String userEmail) {
        return userRepository.getUserIdByUserEmail(userEmail);
    }

    @Transactional
    @Override
    public void registUserChoice(int userId, CategoryChoiceReq categoryChoiceReq) {
        List<ActivityUser> activityUserList = new ArrayList<>();
        List<FoodUser> foodUserList = new ArrayList<>();
        List<MusicUser> musicUserList = new ArrayList<>();

        List<IdLikeYN> music = categoryChoiceReq.getMusic();
        for(IdLikeYN like : music) {
            MusicUser musicUser = MusicUser.builder()
                    .userId(userId)
                    .musicId(like.getId())
                    .likeYN(like.getLikeYN())
                    .build();
            musicUserList.add(musicUser);
        }

        List<CategoryLikeYN> food = categoryChoiceReq.getFood();
        for(CategoryLikeYN like : food){
            FoodUser foodUser = FoodUser.builder()
                    .userId(userId)
                    .foodName(like.getCategory())
                    .likeYN(like.getLikeYN())
                    .build();
            foodUserList.add(foodUser);
        }


        List<CategoryLikeYN> activity = categoryChoiceReq.getActivity();
        for(CategoryLikeYN like : activity) {
            ActivityUser activityUser = ActivityUser.builder()
                    .userId(userId)
                    .activityName(like.getCategory())
                    .likeYN(like.getLikeYN())
                    .build();
            activityUserList.add(activityUser);
        }

        musicUserRepository.saveAll(musicUserList);
        foodUserRepository.saveAll(foodUserList);
        activityUserRepository.saveAll(activityUserList);
    }

    @Override
    public User getUserByUserEmail(String userEmail) {
        User user = userRepository.getUserByUserEmail(userEmail);
        return user;
    }

    @Override
    public User createUser(String email, String nickname, String img) {
        User user = new User(email, nickname, img);
        userRepository.save(user);
        return user;
    }
}
