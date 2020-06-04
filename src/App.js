import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import TodoContainer from './TodoContainer';

function App() {
  
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos,input]);
    setInput('');
  };

  return (
    <div>
      <h1>Hello Mariusz</h1>
      <form>
        <input value={input} 
        onChange={e => setInput(e.target.value)} type='text' />
        <button type='submit' 
        onClick={addTodo}>Add Todo</button>

      </form>
      <TodoContainer todos={todos} />;
    </div>
  );
}

export default App;
