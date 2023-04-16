import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [Todos, settodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <TodoList Todos = {Todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
