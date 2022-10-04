/* 액션 타입 정의 */
const REFRESH_FOOD_LIST = 'food/refresh';
const SET_FOOD_LIST = 'food/list';
const SET_CURRENT_FOOD = 'food/current';
const SET_FOOD_CHOICE = 'food/choice';
const SET_CURRENT_STORE = 'food/store';

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

export const setFoodChoice = (category, value) => ({
  type: SET_FOOD_CHOICE,
  category,
  value,
});

export const setCurrentStore = (store) => ({
  type: SET_CURRENT_STORE,
  store,
});

/* 리듀서 정의 */
export function foodReducer(state, action) {
  switch (action.type) {
    case REFRESH_FOOD_LIST:
      return { ...state, refresh: state.refresh + 1 };
    case SET_FOOD_LIST:
      const newList = action.list.map((item) => {
        item.choiceYN = 0;
        return item;
      });
      return { ...state, list: newList };
    case SET_CURRENT_FOOD:
      return { ...state, current: action.current };
    case SET_FOOD_CHOICE:
      const updatedList = state.list.map((item) => {
        if (item.foodCategory === action.category) item.choiceYN = action.value;
        return item;
      });
      return { ...state, list: updatedList };
    case SET_CURRENT_STORE:
      return { ...state, store: action.store };
    default:
      return state;
  }
}
