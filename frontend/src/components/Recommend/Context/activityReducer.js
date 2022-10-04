/* 액션 타입 정의 */
const REFRESH_ACTIVITY_LIST = 'activity/refresh';
const SET_ACTIVITY_LIST = 'activity/list';
const SET_CURRENT_ACTIVITY = 'activity/current';
const SET_ACTIVITY_CHOICE = 'activity/choice';
const SET_CURRENT_STORE = 'activity/store';

/* 액션 생성 함수 */
export const refreshActivityList = () => ({
  type: REFRESH_ACTIVITY_LIST,
});

export const setActivityList = (list) => ({
  type: SET_ACTIVITY_LIST,
  list,
});

export const setActivityChoice = (category, value) => ({
  type: SET_ACTIVITY_CHOICE,
  category,
  value,
});

export const setCurrentActivity = (current) => ({
  type: SET_CURRENT_ACTIVITY,
  current,
});

export const setCurrentStore = (store) => ({
  type: SET_CURRENT_STORE,
  store,
});

/* 리듀서 정의 */
export function activityReducer(state, action) {
  switch (action.type) {
    case REFRESH_ACTIVITY_LIST:
      return { ...state, refresh: state.refresh + 1 };
    case SET_ACTIVITY_LIST:
      const newList = action.list.map((item) => {
        item.choiceYN = 0;
        return item;
      });
      return { ...state, list: newList };
    case SET_CURRENT_ACTIVITY:
      return { ...state, current: action.current };
    case SET_ACTIVITY_CHOICE:
      const updatedList = state.list.map((item) => {
        if (item.activityCategory === action.category)
          item.choiceYN = action.value;
        return item;
      });
      console.log(updatedList);
      console.log(action);
      return { ...state, list: updatedList };
    case SET_CURRENT_STORE:
      return { ...state, store: action.store };
    default:
      return state;
  }
}
