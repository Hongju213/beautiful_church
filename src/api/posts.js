import axios from 'axios';

// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어를 배워봅시다",
    body: "리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠."
  },
  {
    id: 2,
    title: "redux-thunk를 사용해봅시다",
    body: "redux-thunk를 사용해서 비동기 작업을 처리해봅시다!"
  },
  {
    id: 3,
    title: "redux-saga도 사용해봅시다",
    body:
      "나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요."
  }
];

const problem = [
  {
    id: 1,
    title: "1. 창세기 1장1절을 외워 쓰시오.",
    body: ""
  },
  {
    id: 2,
    title: "2. 하나님께서 “보시기에 좋았더라”라는 말씀이 1장에 몇 번 나오는가?",
    body: "➀6번 ➁7번 ➂8번 ➃9번"
  },
  {
    id: 3,
    title: "3. 하나님께서 사람을 누구의 형상대로 창조하셨는가?(1:27)",
    body:
      ""
  },
  {
    id: 4,
    title: "4. 처음 남자와 여자에게 복을 주시며 말씀하신 내용이 아닌 것은?",
    body: "➀ 땅에 충만하라 ➁모든 생물을 다스리라 ➂땅을 정복하라 ➃모든 동.식물을 다스리라"
  },
  {
    id: 5,
    title: "5. 하나님께서 사람을 무엇으로 지으셨나?",
    body: "➀ 흙 ➁나무 ➂물 ➃공기"
  },
  {
    id: 6,
    title: "6. 하나님께서 사람을 지으시고 무엇을 그 코에 불어넣으시니 사람이 생령이 되었는가?",
    body:
      "➀ 생기 ➁성령 ➂바람 ➃흙"
  }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  return problem; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
  return posts.find(post => post.id === id); // id 로 찾아서 반환
};