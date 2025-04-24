import logo from './logo.svg';
import './App.css';
import { Parent } from './Parent';
import { UserProvider } from './UserContext';

function App() {
  
  return (

    //<UserProvider children = {<Parent />} />
    
    <UserProvider>
      <Parent/>{/* -> children으로 넘어간다.  */}
    </UserProvider>
  )
}

export default App;
