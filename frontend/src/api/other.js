import { getApiInstance } from 'api';
const api = getApiInstance();

export function getOtherUser() {
    console.log('token', localStorage.getItem('token'))
    return api.get(`/otheruser`)
    .then((res)=>{
        console.log('otheruser', res.data)
        return res.data
    })
    .catch((err)=>{
        console.error('otheruser error',err)
    });
}
export function getOtherUserActivity({activityId}) {
    return api.get(`/detail/activity/${activityId}`)
    .then((res)=>{
        console.log('타유저 선택 활동 상세보기', res.data)
        return res.data
    })
    .catch((err)=>{
        console.error('otheruser activity error',err)
    });
}
export function getOtherUserFood({foodId}) {
    return api.get(`/detail/food/${foodId}`)
    .then((res)=>{
        console.log('타유저 선택 음식 상세보기', res.data)
        return res.data
    })
    .catch((err)=>{
        console.error('otheruser food error',err)
    });
}

