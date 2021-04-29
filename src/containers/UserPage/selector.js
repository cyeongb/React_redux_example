import { createSelector } from "reselect";

const userPage = (state) => state.UserPage;

export const makeSelectUser = createSelector(
  userPage,
  (UserPage) => UserPage.user
);
