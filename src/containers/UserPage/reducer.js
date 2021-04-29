import { ActionTypes } from "./constant";

const defaultState = {
  user: "",
};

export default function UserPageReducer(state = defaultState, action) {

  console.log("reducers.js userPageReducer () action>", action, action.payload);
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}
