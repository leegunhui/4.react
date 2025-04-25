import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './actions';
import store from './store';
import { Provider } from 'react-redux';

const TodoApp = () =>{
  const [input,setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const disPatch = useDispatch();

  const handleAddTodo = () => {
    if(input.trim()) {
      disPatch(addTodo(Date.now(), input));
      setInput('');//입력창 비우기
    }
  }

  const handleRemoveTodo = (id) => {
    disPatch(removeTodo(id));
  }

  return(
    <div>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Add a new todo'
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
