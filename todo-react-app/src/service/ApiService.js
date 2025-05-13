import axios from 'axios'
import { API_BASE_URL } from '../api-config'

//1. axios 객체 생성
//바뀌지 않는 공통적인 기본설정
//create() : axios가 제공하는 팩토리함수
//팩토리 패턴 : 여러곳에서 api의 호출이 필요할 때
//매번 같은 설정을 반복하지 않고 한번에 설정을 정의하는 방식
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers : {
        'Content-Type' : 'application/json'

    }
})

//인터셉터 : 요청 전/후에 공통 로직을 삽입할 수 있는 로직으로 ,인증 토큰 첨부터 에러 일괄처리에 핵심적으로 사용됨
//2. 요청 인터셉터로 토큰 자동 첨부
//interceptors.request.use(onFulfilled, onRejected) :역할이 서버로 전송되기 전에 호출될 콜백함수를 등록한다.
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config; // 꼭 return 해줘야 함!
});

//3. 응답 인터셉터로 403 처리
//interceptors.response.use(onFufilled, onRejected) : 서버로부터 응답을 받은 직후에 호출될 콜백을 등록한다.
//?.(옵셔널체이닝) : null이나 undefined가 있을 수 있는 객체의 프로퍼티로 접근할 때, 에러를 방지하고
//안전하게 값을 조회하거나 호출할 수 있게 해준다.
//null 또는 undefined일 경우 즉시 undefined를 반환하고 그 뒤 연산은 생략한다.

apiClient.interceptors.response.use(response => response,
    error => {
        //const status = error.response?.status
        console.log(error.response.status)
        if(error.response.status === 403){
            window.location.href='/login'
        }
        //이 에러가 다음 catch블록이나 호출측으로 전달되도록 한다.
        return Promise.reject(error);
    }
)


//백엔드에 요청을 대신 해주는 메서드를 만들것이다.
//api : 호출할 API의 경로(/todo, /users)
//method : HTTP메서드(GET,POST,PUT,DELETE)
//request : 요청에 담을 데이터(주로 POST,PUT에서 사용)
export async function call(api,method,request){
    
    // //  let headers = new Headers({
    // //     "Content-Type":"application/json"
    // // })
    // // //로컬 스토리지에서 ACCESS TOKEN 가져오기
    // // const accessToken = localStorage.getItem("ACCESS_TOKEN");
    // // if(accessToken && accessToken !== null){
    // //     headers.append("Authorization","Bearer "+accessToken);
    // // }

    // // //Content-Type : application/json
    // // //Authorization : Bearer 토큰값

    // //기본 옵션 설정
    // let options = {
    //     headers:headers,
    //     url : API_BASE_URL + api,
    //     method : method
    // }

    //false,0,빈문자열,null,undeifned,NaN -> false로 취급
    // if(request){
    //     //JSON.stringify() : 객체를 JSON문자열로 변환 
    //     options.data = JSON.stringify(request);
    // }

    //앞서 설정한 options객체를 사용하여 axios로 HTTP요청을 보낸다.
    return apiClient({
        url : api,
        method,
        data : request || undefined,
    })
        .then(res => res.data);
    // return axios(options)
    //     //요청이 성공적으로 처리된 경우 실행되는 코드이다.
    //     .then(response => {
    //         console.log(response.data);
    //         return response.data;
    //     })
    //     .catch(error => {
    //         console.log("에러코드 : ",error.status);
    //         if(error.response.status === 403){
    //             //403코드면 로그인 path로 가라
    //             //window.location.href : 브라우저가 해당 URL로 새 HTTP요청을 보낸다.
    //             //사용자가 한 것은 아니지만 새 요청이 발생한다.
    //             window.location.href="/login";
    //         }
    //     })
    
}

//userDTO 매개변수에 담긴 내용
//{username:username, password:password}
export function signin(userDTO){
    return call("/auth/signin", "POST", userDTO)
        .then(response => {
            console.log(response)
            if(response.token){
                //로컬 스토리지에 토큰 저장
                localStorage.setItem("ACCESS_TOKEN",response.token);
                //token이 존재할 경우 Todo화면으로 리다이렉트
                window.location.href="/";
            } else {
                window.location.href="/login";
            }
        })
    }

export function signout(){
    //로컬스토리지에 있는 토큰을 없앤다.
    localStorage.setItem("ACCESS_TOKEN",null);
    window.location.href="/login";
}

//계정생성
export function signup(userDTO){
    return call("/auth/signup","POST",userDTO);
}