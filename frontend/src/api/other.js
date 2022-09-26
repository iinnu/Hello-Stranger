import { getApiInstance } from 'api';

const api = getApiInstance();

function getOtherUserDetail() {
    api.get(`/otheruser`)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.error(err)
    });
}

export {getOtherUserDetail}