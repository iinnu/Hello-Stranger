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
        const dataArray = Object.entries(res.data)
        const dataObject = {}
        const storeData = {}
        const foodData = []
        const activityData =[]
        console.log('dataArray', dataArray)
        dataArray?.map((key)=>{
          if(key[0]==='leastFoodStore' || key[0] ==='mostFoodStore'){
            return key[1].map((e)=>{
              const data = {lat: e.latitude, lng: e.longitude}
              dataObject[`food${e.id}`] = data
              foodData.push(e)
          })
  
          }else if (key[0] === 'leastActivityStore' || key[0] ==='mostActivityStore'){
            return key[1].map((e)=>{
              const data = {lat: e.latitude, lng: e.longitude}
              dataObject[`activity${e.id}`] = data
              activityData.push(e)
          }
        )}})
        const data = res.data
        const locationData = dataObject
        localStorage.setItem('storeData', JSON.stringify({food: foodData, activity: activityData}))
        console.log('storeData', {food: foodData, activity: activityData})
        console.log('data, locationData', data, locationData)
        return {data, locationData}
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