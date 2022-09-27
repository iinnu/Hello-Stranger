import { getApiInstance } from 'api';

const api = getApiInstance();

function getUserDetail() {
    api.get(`/detail`)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    });
}

function getUserDetailActivity(activityId){
    api.get(`/detail/activity/${activityId}`)
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}
function getUserDetailFood(foodId){
    api.get(`/detail/activity/${foodId}`)
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}

function rateRecommendation({reviewId, rating}){
    api.post(`detail/detail/${reviewId}/rating`,
        {
        rating,
        //body내용, 아마 바뀔 듯
        // "activity": {
        //     "category": "string",
        //     "choiceYN": "string"
        // },
        // "food": {
        //     "category": "string",
        //     "choiceYN": "string"
        // },
        // "music": {
        //     "choiceYN": "string",
        //     "id": 0
        // },
        }
    )
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}

export {
    getUserDetail, 
    getUserDetailActivity, 
    getUserDetailFood, 
    rateRecommendation
}
  