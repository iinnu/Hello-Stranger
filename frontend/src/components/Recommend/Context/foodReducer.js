/* 액션 타입 정의 */
const REFRESH_FOOD_LIST = 'food/refresh';
const SET_FOOD_LIST = 'food/list';
const SET_CURRENT_FOOD = 'food/current';
const ADD_LIKE_FOOD = 'food/like';
const ADD_DISLIKE_FOOD = 'food/dislike';

/* 액션 생성 함수 */
export const refreshFoodList = () => ({
  type: REFRESH_FOOD_LIST,
});

export const setFoodList = (list) => ({
  type: SET_FOOD_LIST,
  list,
});

export const setCurrentFood = (current) => ({
  type: SET_CURRENT_FOOD,
  current,
});

export const addLikeFood = (food) => ({
  type: ADD_LIKE_FOOD,
  food,
});

export const addDislikeFood = (food) => ({
  type: ADD_DISLIKE_FOOD,
  food,
});

/* 리듀서 정의 */
export function foodReducer(state, action) {
  switch (action.type) {
    case REFRESH_FOOD_LIST:
      return { ...state, refresh: state.refresh + 1 };
    case SET_FOOD_LIST:
      return { ...state, list: action.list };
    case SET_CURRENT_FOOD:
      return { ...state, current: action.current };
    case ADD_LIKE_FOOD:
      return state;
    case ADD_DISLIKE_FOOD:
      return state;
    default:
      return state;
  }
}
