import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createSelector } from "reselect";
import styled from "styled-components";
import { setUser } from "./action";
import { makeSelectUser } from "./selector";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const UserWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: rgb(214, 122, 127);
  margin: 0;
`;

const UserEmail = styled.h3`
  font-size: 18px;
  color: burlywood;
  margin: 0;
`;

const userSelector = createSelector(makeSelectUser, (user) => ({
  user: user,
}));

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export function UserPage(props) {
  const history = useHistory();
  console.log("history:", history);
  const goBack = () => {
    history.push("/");
  };

  const { user } = useSelector(userSelector);
  const { setUser } = actionDispatch(useDispatch());

  const { userId } = useParams(props); //useParams()는 url의 파라미터 리스트를 보여줌

  const fetchUser = async (id) => {
    console.log("fetchUser() id:", id);
    const res = await axios
      .get(`https://reqres.in/api/users/${id}`)
      .catch((e) => {
        console.log("fetchUser() error >", e);
      });

    if (res) {
      console.log("fetchUser res.data.data :", res.data.data);
      setUser(res.data.data);
    }
  };

  //user의 id가 바뀔때마다 동작합니다.
  useEffect(() => {
    console.log("userpage - useEffect() userId :", userId);
    if (userId && userId !== "") {
      fetchUser(userId);
    }
  }, [userId]);

  if (!user) return <div>Loading . . .</div>;

  return (
    <div>
      <UserContainer>
        <UserWrapper>
          <UserImage>
            <img src={user.avatar} alt="user_image" />
          </UserImage>
          <UserName>
            ◼ {user.first_name}
            {user.last_name}
          </UserName>
          <UserEmail>◼ {user.email}</UserEmail>
        </UserWrapper>
      </UserContainer>
      <button onClick={goBack}>Back</button>
    </div>
  );
}
