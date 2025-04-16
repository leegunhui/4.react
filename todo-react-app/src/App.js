import logo from './logo.svg';
import Todo from './Todo';
import './App.css';
import { Example } from './Example';
function App() {
  return (
    <div className="App">
      <Example /> 
    </div>
  );
}

export default App;
//Todo 프로그램 만들기
//다양한 내용의 할일을 추가하는것
//임의의 Todo리스트는 각 Todo마다 다른 내용을 갖고있어야한다.
//이 요구사항을 충족하기 위해 Todo컴포넌트에 title을 매개변수로 넘기자
