import logo from './logo.svg';
import './App.css';
import { Counter } from './component/counter';
import { useState } from 'react';
import { RouterEx } from './router/router'; 
import { MyProvider } from './context/context,js';
import { Parent } from './context/parent';
import { Child } from './context/child';
import { GrandChild } from './context/grandchild';
function App() {

  //useState()
  //리액트에서 제공하는 훅(Hook)
  //함수를 실행하면 상태변수 1개와, 변수의 값을 바꿔줄 수 있는 함수 1개를 요소로 갖는
  //배열을 반환
  const [count, setCount] = useState(0);
  return (
    <div>
    // counter.js로 count,setCount넘기는 방법
   <Counter count={count} setCount={setCount} /> //컴포넌트의 호출
   <RouterEx/>
   <MyProvider>
    
   </MyProvider>
   </div>
  );
}

export default App;
