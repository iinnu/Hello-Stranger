/* 액션 타입 정의 */
const REFRESH_MUSIC_LIST = 'music/refresh';
const SET_MUSIC_LIST = 'music/list';
const SET_CURRENT_MUSIC = 'music/current';
const SET_MUSIC_CHOICE = 'music/choice';
const SET_RECOMMEND_LIST = 'music/recommend/list';
const SET_RECOMMEND_CURRENT = 'music/recommend/current';
const SET_RECOMMEND_URL = 'music/recommend/url';

/* 액션 생성 함수 */
export const refreshMusicList = () => ({
  type: REFRESH_MUSIC_LIST,
});

export const setMusicList = (list) => ({
  type: SET_MUSIC_LIST,
  list,
});

export const setCurrentMusic = (current) => ({
  type: SET_CURRENT_MUSIC,
  current,
});

export const setMusicChoice = (id, value) => ({
  type: SET_MUSIC_CHOICE,
  id,
  value,
});

export const setRecommendList = (recommend) => ({
  type: SET_RECOMMEND_LIST,
  recommend,
});

export const setRecommendCurrent = (current) => ({
  type: SET_RECOMMEND_CURRENT,
  current,
});

export const setRecommendUrl = (url) => ({
  type: SET_RECOMMEND_URL,
  url,
});

/* 리듀서 정의 */
export function musicReducer(state, action) {
  switch (action.type) {
    case REFRESH_MUSIC_LIST:
      return { ...state, refresh: state.refresh + 1 };
    case SET_MUSIC_LIST:
      const newList = action.list.map((item) => {
        item.choiceYN = 0;
        return item;
      });
      return { ...state, list: newList };
    case SET_CURRENT_MUSIC:
      return { ...state, current: action.current };
    case SET_MUSIC_CHOICE:
      const updatedList = state.list.map((item) => {
        if (item.musicID === action.id) item.choiceYN = action.value;
        return item;
      });
      return { ...state, list: updatedList };
    case SET_RECOMMEND_LIST:
      return { ...state, recommend: action.recommend };
    case SET_RECOMMEND_CURRENT:
      return { ...state, rec_current: action.current };
    case SET_RECOMMEND_URL:
      return { ...state, url: action.url };
    default:
      return state;
  }
}
