import { getApiInstance } from 'api';
const api = getApiInstance();

export function getOtherUser() {
    api.get(`/otheruser`)
    .then((res)=>{
        console.log('otheruser', res)
        return res.data
    })
    .catch((err)=>{
        console.error('otheruser error',err)
    });
}
export function getOtherUserActivity({activityId}) {
    api.get(`/detail/activity/${activityId}`)
    .then((res)=>{
        console.log('otheruser activity', res)
        return res.data
    })
    .catch((err)=>{
        console.error('otheruser activity error',err)
    });
}
export function getOtherUserFood({foodId}) {
    api.get(`/detail/food/${foodId}`)
    .then((res)=>{
        console.log('otheruser food', res)
        return res.data
    })
    .catch((err)=>{
        console.error('otheruser food error',err)
    });
}

