/* 액션 타입 정의 */
const INCREASE_INDEX = 'index/increase';
const DECREASE_INDEX = 'index/decrease';

/* 액션 생성 함수 */
export const increaseIndex = () => ({ type: INCREASE_INDEX });
export const decreaseIndex = () => ({ type: DECREASE_INDEX });

/* 리듀서 정의 */
export function indexReducer(state, action) {
  switch (action.type) {
    case INCREASE_INDEX:
      return { ...state, index: state.index + 1 };
    case DECREASE_INDEX:
      return { ...state, index: state.index - 1 };
    default:
      return state;
  }
}
