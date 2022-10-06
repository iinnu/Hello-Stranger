package com.ssafy.api.service;

import com.ssafy.api.dto.BaseInfo;
import com.ssafy.api.dto.CategoryLikeYN;
import com.ssafy.api.dto.IdLikeYN;
import com.ssafy.api.request.CategoryChoiceReq;
import com.ssafy.api.request.DetailRatingRegistReq;
import com.ssafy.api.response.ActivityRecGetRes;
import com.ssafy.api.response.FoodRecGetRes;
import com.ssafy.api.response.MusicRecGetRes;
import com.ssafy.db.entity.*;
import com.ssafy.db.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecServiceImpl implements RecService{
    @Autowired
    FoodCategoryRepository foodCategoryRepository;
    @Autowired
    ActivityCategoryRepository activityCategoryRepository;
    @Autowired
    ActivityRecRepository activityRecRepository;
    @Autowired
    ActivityRepository activityRepository;
    @Autowired
    MusicRepository musicRepository;
    @Autowired
    MusicRecRepository musicRecRepository;
    @Autowired
    FoodRecRepository foodRecRepository;
    @Autowired
    FoodRepository foodRepository;

    @Autowired
    ActivityUserRepository activityUserRepository;
    @Autowired
    FoodUserRepository foodUserRepository;
    @Autowired
    MusicUserRepository musicUserRepository;
    @Override
    public List<MusicRecGetRes> getMusicRec(int key, User user) {

        int userId=user.getUserId();
        int recNum = 10;
        int start = recNum*key;

        List<MusicRecGetRes> res = new ArrayList<>();
        String [] musicRecs = musicRecRepository.findByUserId(userId).getMusic().split(" ");
        for(int i=start; i<start+recNum;i++){
            Music music = musicRepository.findById(Integer.parseInt(musicRecs[i])).get();
            res.add(MusicRecGetRes.builder()
                    .musicID(music.getMusicId())
                    .musicName(music.getMusicName())
                    .musicArtist(music.getMusicArtist())
                    .musicImgUrl(music.getMusicImgUrl())
                    .build());
        }
        //
        return res;
    }

    @Override
    public List<ActivityRecGetRes> getActivityRec(int key, double distance, double latitude, double longitude, User user) {
        List<ActivityRecGetRes> res = new ArrayList<>();

        int userId = user.getUserId();
        int recNum = 6;
        int start = recNum*key;

        String [] activityRecs = activityRecRepository.findByUserId(userId).getActivity().split(" ");
        for(int i=start; i<start+recNum; i++){
            String imgUrl = activityCategoryRepository.getActivityCategoryByCategoryName(activityRecs[i]).getCategoryImgUrl().replace("\r","");
            List<Activity> stores = activityRepository.findActivityByDistance(distance,latitude,longitude,activityRecs[i]);
            List<BaseInfo> storesBase = new ArrayList<>();
            int len = stores.size();
            for(int j=0; j<len;j++){
                Activity cur = stores.get(j);
                 String review = cur.getActivityReview();
                review = review.replace(".||.", " ").replace("\"\"", "\"");
                review = review.startsWith("\"") ? review.substring(1, review.length()-1) : review;
                String[] results = review.split("\\[>\\*}");
                storesBase.add(BaseInfo.builder()
                        .longitude(cur.getActivityLongitude())
                        .latitude(cur.getActivityLatitude())
                        .id(cur.getActivityId())
                        .name(cur.getActivityName())
                        .time(cur.getActivityTime())
                        .address(cur.getActivityAddress())
                        .imgUrl(cur.getActivityImgUrl())
                        .rating(cur.getActivityRating())
                        .review(results)
                        .build());
            }
            res.add(ActivityRecGetRes.builder().activityCategory(activityRecs[i]).store(storesBase).imgUrl(imgUrl).build());
        }
        return res;
    }

    @Override
    public List<FoodRecGetRes> getFoodRec(int key, double distance, double latitude, double longitude, User user) {
        List<FoodRecGetRes> res = new ArrayList<>();
        int userId = user.getUserId();
        int recNum = 6;
        int start = recNum*key;
        String [] foodRecs = foodRecRepository.findByUserId(userId).getFood().split(" ");
        for(int i=start; i<start+recNum; i++){
            String imgUrl = foodCategoryRepository.getFoodCategoryByCategoryName(foodRecs[i]).getCategoryImgUrl().replace("\r","");
            List<Food> stores = foodRepository.findFoodByDistance(distance,latitude,longitude,foodRecs[i]);
            List<BaseInfo> storesBase = new ArrayList<>();
            int len = stores.size();
            for(int j=0; j<len;j++){
                Food cur = stores.get(j);
                String review = cur.getFoodReview();
                review = review.replace(".||.", " ").replace("\"\"", "\"");
                review = review.startsWith("\"") ? review.substring(1, review.length()-1) : review;
                String[] results = review.split("\\[>\\*}");
                storesBase.add(BaseInfo.builder()
                        .longitude(cur.getFoodLongitude())
                        .latitude(cur.getFoodLatitude())
                        .id(cur.getFoodId())
                        .name(cur.getFoodName())
                        .time(cur.getFoodTime())
                        .address(cur.getFoodAddress())
                        .review(results)
                        .rating(cur.getFoodRating())
                        .imgUrl(cur.getFoodImgUrl())
                        .build());
            }
            res.add(FoodRecGetRes.builder().foodCategory(foodRecs[i]).store(storesBase).imgUrl(imgUrl).build());
        }
        return res;
    }
    public void registResultCategory(CategoryChoiceReq req, User user){
        List<ActivityUser> activityUserList = new ArrayList<>();
        List<FoodUser> foodUserList = new ArrayList<>();
        List<MusicUser> musicUserList = new ArrayList<>();
        int userId = user.getUserId();
        List<IdLikeYN> music = req.getMusic();
        for(IdLikeYN like : music) {
            MusicUser musicUser = MusicUser.builder()
                    .userId(userId)
                    .musicId(like.getId())
                    .likeYN(like.getLikeYN())
                    .build();
            musicUserList.add(musicUser);
        }

        List<CategoryLikeYN> food = req.getFood();
        for(CategoryLikeYN like : food){
            FoodUser foodUser = FoodUser.builder()
                    .userId(userId)
                    .foodName(like.getCategory())
                    .likeYN(like.getLikeYN())
                    .build();
            foodUserList.add(foodUser);
        }


        List<CategoryLikeYN> activity = req.getActivity();
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
    public void registDetailRating(DetailRatingRegistReq detailRatingResgistReq, User user) {
        MusicUser musicUser = new MusicUser(user.getUserId(), detailRatingResgistReq.getMusic().getId(), detailRatingResgistReq.getMusic().getLikeYN());
        musicUserRepository.save(musicUser);

        FoodUser foodUser = new FoodUser(user.getUserId(), detailRatingResgistReq.getFood().getCategory(), detailRatingResgistReq.getFood().getLikeYN());
        foodUserRepository.save(foodUser);

        ActivityUser activityUser = new ActivityUser(user.getUserId(), detailRatingResgistReq.getActivity().getCategory(), detailRatingResgistReq.getActivity().getLikeYN());
        activityUserRepository.save(activityUser);
    }

}
