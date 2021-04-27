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

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: rgb(214, 122, 127);
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export function UsersList(props) {
  const { users } = useSelector(stateSelector);

  const isEmptyUsers = !users || (users && users.length === 0);
  if (isEmptyUsers) {
    return "No users";
  }

  return (
    <UsersContainers>
      {users.map((user, i) => (
        <UserWrapper key={i}>
          <UserImage>
            <img src={user.avatar} alt="user_avatar" />
          </UserImage>
          <UserName>
            {user.first_name}
            {user.last_name}
          </UserName>
        </UserWrapper>
      ))}
    </UsersContainers>
  );
}
