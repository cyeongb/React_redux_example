import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import { styled } from "styled-components";

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly; /*시작과 끝 사이의 공간을 모두 균등하게 배분함 */
`;

const UserImage = styled.div``;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export function UsersList(props) {
  const { users } = useSelector(stateSelector);
}
