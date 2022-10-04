/* 액션 타입 정의 */
const REFRESH_MUSIC_LIST = 'music/refresh';
const SET_MUSIC_LIST = 'music/list';
const SET_CURRENT_MUSIC = 'music/current';
const SET_MUSIC_CHOICE = 'music/choice';

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
    default:
      return state;
  }
}
