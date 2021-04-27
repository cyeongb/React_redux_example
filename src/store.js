import { createStore, combineReducers } from "redux";
import HomePage from "./containers/HomePage/reducers";

const reducers = combineReducers({ HomePage });
// 여러개의 reducer들을 하나로 묶음

export default createStore(reducers);
