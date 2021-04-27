import { createSelector } from "reselect";

const homePage = (state) => state.HomePage;

export const makeSelectUsers = createSelector(
  homePage,
  (HomePage) => HomePage.users
);

//reselect 패키지로 redux에서 selector를 사용할 수 있게 해준다
// selector는 빠르고 쉽게 store에서 caching된 data를 가져올 수 있다
// memoization 기능으로 data값이 변하지 않으면 이전의 값을 선택하여 불필요한 연산을 막아준다.
