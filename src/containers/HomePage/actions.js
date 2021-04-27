//payload + actionType으로 이루어짐
import { ActionTypes } from "./constants";

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
