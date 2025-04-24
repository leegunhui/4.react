//동기처리
//한번에 하나의 작업만 처리되며 작업이 완료될 때까지 다음 작업을 진행할 수 없다.
export const Sync = () => {

    const performHeavyTask = () => {
        return "두번째 작업 시작";
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
    // console.log('첫번째 작업 시작')
    // setTimeout(() => {
    //     console.log('첫번째 작업 종료')
    // },2000);
    // console.log('다음작업진행');

    //콜백함수 예제
    // function fetchData(callback) {
    //     setTimeout(() => {
    //       const data = '서버에서 받은 데이터';
    //       callback(data); // 작업이 끝난 후 콜백 실행
    //     }, 2000); // 2초 뒤에 실행
    //   }

    //   console.log('API 요청 시작');
    //   fetchData((result) => {
    //     console.log('API 응답:', result);
    //   });
    //   console.log('다음 작업 진행');

    //Promise 객체
    // const fetchData = () => {
    //     //Promise객체를 반환
    //     return new Promise((resolve, reject) => {

    //       //2초 후에 비동기적으로 실행될 작업을 지연시킨다.
    //       setTimeout(() => {
    //         const success = true; // 성공 여부
    //         if (success) {
    //           //success가 true일 때 
    //           resolve('데이터 받아옴');
    //         } else {
    //           reject('에러 발생');
    //         }
    //       }, 2000); // 2초 후 실행
    //     });
    //   };

    //   console.log('API 요청 시작');
    //   fetchData()  //결과에 따라 then과 catch 블록이 실행됩니다.
    //     .then(data => { //then() : Promise가 성공(즉, resolve 호출)하면 실행되는 콜백 함수입니다. 콘솔에 응답 데이터('데이터 받아옴')를 출력합니다.
    //       console.log('API 응답:', data);
    //     })
    //     .catch(error => {// Promise가 실패(즉, reject 호출)하면 실행되는 콜백 함수입니다. 여기서는 에러 메시지를 콘솔에 출력합니다.
    //       console.error('에러:', error);
    //     });
    //   console.log('다음 작업 진행');

    // 비동기함수 생성
    //     const fetchData = async () => {
    //         return '데이터'
    //     }
    //    //문자열을 반환하는것처럼 보이지만
    //    //실제로는 Promise객체를 반환한다.

    //     fetchData()
    //         .then(data => console.log(data));

    const fetchData = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('데이터 받아옴');
            }, 2000); // 2초 후 실행
        });
    };

    const getData = async() => {
        console.log('API 요청 시작');
        const data = await fetchData(); // 2초 후에 데이터를 받음
        console.log('API 응답:', data);
        console.log('다음 작업 진행');
    }
    console.log('함수 밖 진행 전');
    getData();
    console.log('함수 밖 진행 후');
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

// 비동기 처리의 장점
// UI 반응성 유지
// 무거운 작업을 수행할 때도 애플리케이션이 멈추지 않고 계속해서 동작한다.
// 성능 최적화
// 네트워크 요청, 파일 읽기 등 시간이 오래 걸리는 작업이 완료될 때까지 기다리지 않고, 다른 작업을 동시에 수행할 수 있다.
// 사용자 경험 향상
// 데이터를 처리하거나 로딩하는 동안도 애플리케이션이 반응하며, 사용자에게 즉각적인 피드백을 제공할 수 있다.

// Fetch API
// 브라우저에서 제공하는 비동기 네트워크 요청을 수행하는 기본 API이다.
// Promise를 반환하며, 네트워크 요청의 성공 여부에 따라 성공 또는 실패 상태로 처리된다.

