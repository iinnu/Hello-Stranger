import { getApiInstance } from 'api';

const api = getApiInstance();

export function getUserHistory() {
    return api.get('/review')
    .then((res)=>{
        const cardList = res.data.contents
        cardList.sort(function(a, b){
            return b.reviewId - a.reviewId
        })
        console.log('다시보기 리스트 불러오기', cardList)
        return cardList
    })
    .catch((err)=>{
        console.error(err)
    })
}

export function getUserDetail(reviewId) {
    return api.get(`/detail/${reviewId}`)
    .then((res)=>{
        console.log('다시보기 세부 일정 불러오기', reviewId, res.data)
        const dataObject = []
        const dataArray = Object.entries(res.data)
        dataArray?.map((key)=>{
          if(key[0]==='choice_food'){
            const e = key[1]
            dataObject[`food${e.id}`] = {lat: e.latitude, lng: e.longitude}
          } 
          else if(key[0] ==='food'){
            return key[1].map((e)=>{
              const data = {lat: e.latitude, lng: e.longitude}
              dataObject[`food${e.id}`] = data
          })
          }else if (key[0] === 'choice_activity'){
            const e = key[1]
            dataObject[`activity${e.id}`] = {lat: e.latitude, lng: e.longitude}
          }else if (key[0] ==='activity'){
            return key[1].map((e)=>{
              const data = {lat: e.latitude, lng: e.longitude}
              dataObject[`activity${e.id}`] = data
          }
        )}})
        const Data = res.data
        const locationData = dataObject
        console.log('Data, locationData', Data, locationData)
        return {Data, locationData}
    })
    .catch((err)=>{
        console.error(err)
    });
}

export function getUserActivity(activityId){
    return api.get(`/detail/activity/${activityId}`)
    .then((res)=> {
        console.log('활동 상세 정보',res.data)
        return res.data
    })
    .catch((err)=>{
        console.error(err, '활동 정보 안넘어옴')
        return []
    })
}
export function getUserFood(foodId){
    return api.get(`/detail/food/${foodId}`)
    .then((res)=> {
        console.log('음식 상세 정보',res.data)
        return res.data
    })
    .catch((err)=>{
        console.error(err)
        return []
    })
}

export function rateRecommendation({reviewId, activityCatergory, activityLike, foodCategory, foodLike, musicId, musicLike}){
    console.log('api rateRecommendation', reviewId, activityCatergory, activityLike, foodCategory, foodLike, musicId, musicLike)
    api.post(`detail/${reviewId}/rating`,
        {
        "activity": {
            "category": activityCatergory,
            "choiceYN": activityLike
        },
        "food": {
            "category": foodCategory,
            "choiceYN": foodLike
        },
        "music": {
            "choiceYN": musicLike,
            "id": musicId
        },
        }
    )
    .then((res)=> {
        console.log('평가 제대로 됨',res, reviewId, activityCatergory, activityLike, foodCategory, foodLike, musicId, musicLike)
    })
    .catch((err)=>{
        console.error('평가 제대로 안됨',err, reviewId, activityCatergory, activityLike, foodCategory, foodLike, musicId, musicLike)
    })
}
