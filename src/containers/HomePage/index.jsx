import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { setUsers } from "./actions";
import { makeSelectUsers } from "./selectors";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  myusers: users,
}));

const actionDispatch = (dispatch) => ({
  //action을 가공하는 dispatch
  setUser: (users) => dispatch(setUsers(users)),
});

export function HomePage(props) {
  const { myusers } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch()); //dispatch 함수를 가져오기위한 useDispatch , dispatch function을 return 함

  console.log("index.jsx HomePage() users :", myusers);

  const fetchUsers = async () => {
    const res = await axios
      .get("https://reqres.in/api/users")
      .catch((e) => console.log("index.jsx fetchUsers() error >", e));

    console.log("index.jsx fetchUsers() res data :", res.data.data);

    setUser(res.data.data); //해당 url에서 가져온 데이터를 setUser()함수에 대입.
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>HomePage</div>;
}
