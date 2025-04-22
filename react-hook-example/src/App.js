import logo from './logo.svg';
import './App.css';
import Counter from './hook/UseStateEx';
import ShowHide from './hook/Exam';
import Sol1 from './hook/Exam';
import TimerFunction,{UserList,Count,Cleanup} from './hook/UseEffectEx';
import { Counter_ref } from './hook/UseRefEx';
import { InputFocus } from './hook/UseRefEx';
import { InputSample } from './hook/UseRefEx';
import { PreviousValue } from './hook/UseRefEx';

function App() {
  const value = 0;
  return (
    <div InputSample="App">
      <PreviousValue/>
    </div>
  );
}

export default App;
