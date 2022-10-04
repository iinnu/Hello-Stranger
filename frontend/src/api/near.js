import { getApiInstance } from 'api';

const api = getApiInstance();

//동네 최다/최소 분포 업종 목록
//유저 위치 input
function getNearInfo(userAdress, current){
    const latitude = String(current.lat)
    const longitude = String(current.lng)
    console.log('getNearInfo', userAdress, typeof(userAdress), latitude, longitude, current, typeof(current))
    return api.get(`/commercialarea/${userAdress}/${latitude}/${longitude}`)
    .then((res)=>{
        console.log('getNearInfo res',res)
        return res.data
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