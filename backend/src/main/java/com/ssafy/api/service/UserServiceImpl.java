package com.ssafy.api.service;

import com.ssafy.api.dto.CategoryLikeYN;
import com.ssafy.api.dto.IdLikeYN;
import com.ssafy.api.dto.UserChoiceGetResActivity;
import com.ssafy.api.dto.UserChoiceGetResFood;
import com.ssafy.api.request.CategoryChoiceReq;
import com.ssafy.api.response.UserChoiceGetRes;
import com.ssafy.db.entity.*;
import com.ssafy.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

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

    @Autowired
    ActivityCategoryRepository activityCategoryRepository;

    @Autowired
    FoodCategoryRepository foodCategoryRepository;

    @Autowired
    MusicRepository musicRepository;

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

    @Transactional
    @Override
    public UserChoiceGetRes getUserChoiceList() {

        List<Music> musicCategory = musicRepository.getCategoryList();
        List<FoodCategory> foodCategory = foodCategoryRepository.getCategoryList();
        List<ActivityCategory> activityCategory = activityCategoryRepository.getCategoryList();

        List<UserChoiceGetResFood> userChoiceGetResFoods = new ArrayList<>();
        for(FoodCategory category : foodCategory){
            UserChoiceGetResFood userChoiceFood = UserChoiceGetResFood.builder()
                    .foodCategory(category.getCategoryName())
                    .foodImgUrl(category.getCategoryImgUrl())
                    .build();
            userChoiceGetResFoods.add(userChoiceFood);
        }

        List<UserChoiceGetResActivity> userChoiceGetResActivities = new ArrayList<>();
        for(ActivityCategory category : activityCategory){
            UserChoiceGetResActivity userChoiceActivity = UserChoiceGetResActivity.builder()
                    .activityCategory(category.getCategoryName())
                    .activityImgUrl(category.getCategoryImgUrl())
                    .build();
            userChoiceGetResActivities.add(userChoiceActivity);
        }

        UserChoiceGetRes userChoiceGetRes = UserChoiceGetRes.builder()
                .music(musicCategory)
                .food(userChoiceGetResFoods)
                .activity(userChoiceGetResActivities)
                .build();

        return userChoiceGetRes;
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
