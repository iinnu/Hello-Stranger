/* 액션 타입 정의 */
const SET_MUSIC_LIST = 'music/list';
const SET_CURRENT_MUSIC = 'music/current';
const ADD_LIKE_MUSIC = 'music/like';
const ADD_DISLIKE_MUSIC = 'music/dislike';

/* 액션 생성 함수 */
export const setMusicList = (list) => ({
  type: SET_MUSIC_LIST,
  list,
});

export const setCurrentMusic = (current) => ({
  type: SET_CURRENT_MUSIC,
  current,
});

export const addLikeMusic = (music) => ({
  type: ADD_LIKE_MUSIC,
  music,
});

export const addDislikeMusic = (music) => ({
  type: ADD_DISLIKE_MUSIC,
  music,
});

/* 리듀서 정의 */
export function musicReducer(state, action) {
  switch (action.type) {
    case SET_MUSIC_LIST:
      return { ...state, list: action.list };
    case SET_CURRENT_MUSIC:
      return { ...state, current: action.current };
    case ADD_LIKE_MUSIC:
      return state;
    case ADD_DISLIKE_MUSIC:
      return state;
    default:
      return state;
  }
}
