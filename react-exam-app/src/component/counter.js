import { useEffect } from "react";

//컴포넌트
//UI의 조각
//함수로 이루어져 있다
//JSX문법을 이용해서 HTML을 반환

//일반 함수
// function Counter(){

// }

//화살표 함수
const Counter = (props) => {
    const count = props.count;
    const setCount = props.setCount;

    //useEffect() 훅
    //useEffect(()=>{},[]); 이렇게 치고 시작
    //컴포넌트가 렌더링 됐을 때 특정 작업을 수행할 수 있도록 하는 훅\
    //컴포넌트가 렌더링될 때 통신을 통해서 데이터를 조회를 해올 때 많이 쓴다.
    //의존성 배열
    //없으면 매 렌더링마다 useEffect의 콜백함수가 실행이 된다
    //[] 빈배열이면 최초 렌더링시에만 useEffect가 실행 됨
    //[] 특정 값을 배열에 넣으면, 그 값들이 변경될 때마다 useEffect가 실행된다

    useEffect(()=>{
        console.log('useEffect호출됨')
    },[count]);
    //JSX
    //HTML요소들을 JS와 함께 사용하는 문법
    //태그를 변수에 저장할 수 있다고 생각하면 됨
    const element = <h1>hello, jsx</h1>
    const isLoggedIn = true;

    const items = ['사과','바나나','체리']

    return(
        //html코드가 들어가는 곳(화면에서 보게될 ui)
        // 보통 div로 묶는다
        // <> -> JSX Fragment : div는 쓰기 싫은데 안의 내용들을 하나로 묶어야할때
        <div>
            {element}
            {/* 조건부 랜더링 */}
            {/* {isLoggedIn ? 참일때 렌더링할 컴포넌트 : 거짓일때 렌더링할 컴포넌트} */}
            {/* {isLoggedIn && 컴포넌트} */}
            <ul>

                {/* *map 메서드를 이용하여 배열에 있는 내용을 출력* */}
                {/* 콜백함수에서 (item,index) => (<li key={index} > {item}</li>) */}
                {/* 콜백함수를 소괄호로 묶으면 안에있는 내용을 묵시적으로 반환하겠다. */}
                {items.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}

            </ul>
            {/* 스타일을 줄때는 객체형식으로 줘야한다. */}
            <h2 style={{color:'red',fontsize:32}}>{count}</h2>
            {/* 태그에 속성을 줄 때 반드시 카멜표기법으로 써야한다 */}
            <button onClick = {() => {setCount(count+1)}}>+</button>
        </div>
    )
}

//컴포넌트를 생성하고 난 뒤에는 내보내기 해줘야함
//export default Counter; import 할때 중괄호 안써도 되고 이름을 맘대로 써도 됨(default는 하나만 내보낼 수 있기 때문)

export{Counter}; //내보내기 할때도 중괄호, import할때도 중괄호, 이름 맞춰 써야함
