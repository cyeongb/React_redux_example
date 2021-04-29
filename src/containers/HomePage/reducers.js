import { ActionTypes } from "./constants";

const defaultState = {
  users: [],
};

export default function homePageReducer(state = defaultState, action) {
  //리듀서 함수는 이전state와 action객체를 파라미터로 받음.
  console.log("reducer.js homePageReducer () action>", action, action.payload);
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    // state는 읽기전용이기때문에 spread operator을 사용합니다.
    // payload는 새로운 값을 return. 그래서 users에 새로운 값을 대입함
    default:
      return state;
  }
}
