import axios from 'axios';

export const Fetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // JSON 형식으로 응답을 변환
        .then(data => console.log(data))   // 데이터 출력
        .catch(error => console.error('Error:', error)); // 에러 처리
}

export const Axios = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => console.log(response.data))  // 데이터 출력
        .catch(error => console.error('Error:', error)); // 에러 처리
}
//response
//응답에 대한 메타정보와 본문이 들어있다.
//status : http 상태코드
//headers : 응답 헤더를 담고있는 개체
//ok : status가 200-299tkdlaus true
//url : 요청을 보낸 최종 url

//본문
//response의 body는 ReadbleStream이기 때문에
//직접 읽어서 파싱해야한다
//json() -> json문자열을 파싱하여 객체로 변환

// JSON(JavaScript Object Notation)
// 경량의 데이터 교환 형식으로, 사람도 읽기 쉽고, 기계고 구문을 분석하기 쉬운 텍스트이다.
// 주로 클라이언트와 서버간의 구조화된 데이터를 주고받거나, 설정파일, 로그기록 등에 널리 사용된다.

// axios
// Promise기반의 HTTP요청 라이브러리
// fetch api보다 사용법이 직관적이며, 여러가지 기능을 제공한다