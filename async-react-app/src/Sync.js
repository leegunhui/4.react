//동기처리
//한번에 하나의 작업만 처리되며 작업이 완료될 때까지 다음 작업을 진행할 수 없다.
export const Sync = () =>{

    const performHeavyTask = () =>{
        return "두번째 작업 시작"
        }
    
        //작업이 순차적으로 진행된다
    console.log('첫번째 작업 시작')
    performHeavyTask();
    console.log('다음작업진행');
}

//비동기 처리
//작업이 완료되기를 기다리지 않고, 다른작업을 동시에
//실행할 수 있다.
//결과가 준부되면 그 시점에 맞춰 특정작업을 처리할 수 있도록 한다.

export const Async = () => {
    console.log('첫번째 작업 시작')
    setTimeout(() => {
        console.log('첫번째 작업 종료')
    },2000);
    console.log('다음작업진행');

    function fetchData(callBack){
        setTimeout(() => {
            const data = '서버에서 받은 데이터';
            callBack(data); //2초가 지난후 콜백함수 실행
        },2000)
    }

    console.log('API 요청 시작')
    fetchData((result) => {
        console.log('API 응답 : ' , result);
    });
    console.log('다음작업진행');
}

// 비동기 처리가 중요한 이유
// 주로 시간이 오래 걸리는 작업(예: 네트워크 요청, 파일 읽기/쓰기, 타이머 등)을 처리할 때 유용하다.
// 만약 이런 작업을 동기 방식으로 처리한다면, 작업이 완료될 때까지 애플리케이션이 멈추게 되어 사용자 경험이 매우 나빠질 수 있다.
// 비동기 처리를 사용하면, 작업이 완료될 때까지 기다리는 동안에도 UI가 반응하고 다른 작업이 실행될 수 있다.

// 비동기 처리의 주요 패턴
// 1. 콜백함수(Callback Function)
// 콜백 함수는 특정 작업이 완료된 후에 호출되는 함수이다.
// 예를 들어, API 요청이 완료되었을 때 실행될 함수를 전달하여, 해당 작업이 끝난 후 처리하게 할 수 있다.

// 2. Promise
// Promise는 비동기 작업이 완료되었을 때 성공 또는 실패 결과를 반환하는 객체이다.
// then과 catch를 통해 작업의 성공 또는 실패를 처리할 수 있다.

// 3. async/await
// Promise를 기반으로 한 비동기 처리 방식으로, 동기 처리처럼 보이지만 비동기 작업을 수행할 수 있게 해준다.
// await 키워드는 Promise가 해결될 때까지 기다린다.

// async 함수
// async 키워드는 함수 앞에 붙여서 그 함수가 비동기 함수임을 나타낸다.
// 비동기 함수는 항상 Promise를 반환한다.
// 함수 내부에서 return 값은 자동으로 resolve로 처리됩니다.

// await
// await 키워드는 비동기 함수에서만 사용할 수 있으며, Promise가 처리될 때까지 함수 실행을 일시적으로 중지한다.
// Promise가 resolve되면, 그 값을 반환받아 동기적으로 코드가 실행되는 것처럼 이어진다.