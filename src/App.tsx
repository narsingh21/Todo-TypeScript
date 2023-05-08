import './App.css';
import { useState } from 'react';
import Todos from './component/Todos';
import Todo from './models/todo';
import NewTodo from './component/Newtodo';

function App() {
  
  const [todos, setTodos]= useState <Todo[]>([])

  const addTodoHandler= (todoText:string)=>{
        const newTodo = new Todo(todoText)
        setTodos((prevTodos)=>{
          return prevTodos.concat(newTodo)
        })
        
  }
  const RemoveHandler= (todoId:String)=>{
    
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=> todo.id!==todoId)
    })
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={RemoveHandler} />
    </div>
  );
}

export default App;
