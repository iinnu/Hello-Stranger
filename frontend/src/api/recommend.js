import { getApiInstance } from 'api';

const api = getApiInstance();

function getMusicRecommend(key = 0, success, fail) {
  api.get(`rec/music/${key}`).then(success).catch(fail);
}

export { getMusicRecommend };
