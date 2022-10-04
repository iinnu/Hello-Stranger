import axios from 'axios';

export default function userInputList(state, action) {
  const userInputInfo = { ...state };
  if (action.type === 'getUserChoice') {
    axios({
      url: 'http://localhost:8081/api/user/choice',
      method: 'get',
    })
      .then((res) => {
        userInputInfo.food = res.data.food;
        userInputInfo.activity = res.data.activity;
        userInputInfo.music = res.data.music;
        console.log(userInputInfo);
        window.location.href = '/guide/first';
      })
      .catch((err) => {
        console.log(err);
        window.location.href = '/guide/first'; //일단 다음으로 넘어가려고 해놓음
      });
  }
  return userInputInfo;
}
