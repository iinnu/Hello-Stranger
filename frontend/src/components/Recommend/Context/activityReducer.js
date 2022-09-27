/* 액션 타입 정의 */
const REFRESH_ACTIVITY_LIST = 'activity/refresh';
const SET_ACTIVITY_LIST = 'activity/list';
const SET_CURRENT_ACTIVITY = 'activity/current';
const ADD_LIKE_ACTIVITY = 'activity/like';
const ADD_DISLIKE_ACTIVITY = 'activity/dislike';

/* 액션 생성 함수 */
export const refreshActivityList = () => ({
  type: REFRESH_ACTIVITY_LIST,
});
export const setActivityList = (list) => ({
  type: SET_ACTIVITY_LIST,
  list,
});

export const setCurrentActivity = (current) => ({
  type: SET_CURRENT_ACTIVITY,
  current,
});

export const addLikeACTIVITY = (activity) => ({
  type: ADD_LIKE_ACTIVITY,
  activity,
});

export const addDislikeACTIVITY = (activity) => ({
  type: ADD_DISLIKE_ACTIVITY,
  activity,
});

/* 리듀서 정의 */
export function activityReducer(state, action) {
  switch (action.type) {
    case REFRESH_ACTIVITY_LIST:
      return { ...state, refresh: state.refresh + 1 };
    case SET_ACTIVITY_LIST:
      return { ...state, list: action.list };
    case SET_CURRENT_ACTIVITY:
      return { ...state, current: action.current };
    case ADD_LIKE_ACTIVITY:
      return state;
    case ADD_DISLIKE_ACTIVITY:
      return state;
    default:
      return state;
  }
}
