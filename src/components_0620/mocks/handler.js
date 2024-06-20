// http
// 프론트와 백엔드는 http(Hyper Text Transfer Protocol, 프로토콜)로 서로 대화한다
// ex. 미국에 가면 미국인에게 영어로 대화하듯
// ex. tcp(메일을 주고 받을 때 사용), udp(서로 영상을 주고 받을 때 사용), ssh(해당 컴퓨터에 원격으로 접속할 때 사용) ...
import { http, HttpResponse } from 'msw';

// 백엔드에서 프론트로 줄 데이터 생성하기 (json으로 생성함)
const backendData = [{ todo: 'coding' }, { todo: 'work' }, { todo: 'sleep' }];

// 가상 백엔드 주소 입력하기
export const handler = [
  // http : 통신방법
  // get : 조회하다라는 뜻
  // /todo : 백엔드 주소 경로
  http.get('/todo', () => {
    return HttpResponse.json(backendData);
  }),
];
