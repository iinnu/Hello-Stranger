import { getApiInstance } from 'api';

const api = getApiInstance();

//동네 최다/최소 분포 업종 목록
//유저 위치 input
function getNearInfo(){
    api.get()
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}

// 음식점 상세 정보
function getUserDetailActivity(activityId){
    api.get(`/detail/activity/${activityId}`)
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}

// 활동 가게 상세 정보
function getUserDetailFood(foodId){
    api.get(`/detail/activity/${foodId}`)
    .then((res)=> {
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    })
}

export {getNearInfo}