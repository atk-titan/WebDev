import { useEffect } from 'react';
import React,{useState} from 'react';
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';
import './index.css';

const App = () => {
  const [todos,setTodo]=useState([]);

  const fetchTodos = async ()=>{
      let todoArr = await fetch("http://localhost:3000/todos",{
          method:"GET"
      });
      todoArr = await todoArr.json();
      console.log(todoArr);
      setTodo(todoArr.todos);
  }

  useEffect(()=>{
    fetchTodos();
  },[]);

  return (
    <div>
      <CreateTodo fetchTodo={fetchTodos}></CreateTodo>
      <Todos todos={todos} fetchTodo={fetchTodos}/>
    </div>
  );
}

export default App;