import { getApiInstance } from 'api';

const api = getApiInstance();

export function getMusicRecommend(key = 0, success, fail) {
  api.get(`rec/music/${key}`).then(success).catch(fail);
}

export function getFoodRecommend(key = 0, payload, success, fail) {
  const { location, distance } = payload;
  const { lat, lng } = location;

  api
    .get(`rec/food/${lat}/${lng}/${distance}/${key}`)
    .then(success)
    .catch(fail);
}

export function getActivityRecommend(key = 0, payload, success, fail) {
  const { location, distance } = payload;
  const { lat, lng } = location;

  api
    .get(`rec/activity/${lat}/${lng}/${distance}/${key}`)
    .then(success)
    .catch(fail);
}

export function saveRecommendResult(payload, success, fail) {
  api.post(`rec`, payload).then(success).catch(fail);
}

export function saveReview(payload, success, fail) {
  api.post(`review`, payload).then(success).catch(fail);
}
