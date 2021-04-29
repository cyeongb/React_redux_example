import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

  // 페이지 앞으로가기, 뒤로가기 역할
  const history = useHistory();

  // 해당 유저 클릭시 id를 전달해서 유저 페이지로 이동하는 function
  const clickUser = (id) => {
    history.push(`/user/${id}`);
  };

  if (isEmptyUsers) {
    return "No users";
  }
  return (
    //user id를 통해서 id를 보내면 해당 id의 user를 한명씩 볼 수 있음
    <UsersContainers>
      <h2>User Profile</h2>
      <hr />
      {users.map((user, i) => (
        <UserWrapper key={i} onClick={() => clickUser(user.id)}>
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
