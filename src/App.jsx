import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

function App() {

  const [todos, SetTodos] = useState([]);

  const AddTodo = (newTodo) => {
    SetTodos([...todos, newTodo]);
  }

  const RemoveTodo = (removedTodoId) => {
    const extractedArray = todos.filter((todo) => todo.id !== removedTodoId);
    SetTodos([...extractedArray]);
  }

  const UpdateTodo = (updatedTodo) => {

    const updatedTodos = todos.map((todo) => {
      if (todo.id !== updatedTodo.id) {
        return todo;
      }
      return updatedTodo;
    })

    SetTodos([...updatedTodos])

  }


  return (
    <>
      <div>
        <CreateTodo AddTodo={AddTodo}></CreateTodo>
        <TodoList todos={todos} onRemoveTodo={RemoveTodo} onUpdateTodo={UpdateTodo}></TodoList>
      </div>
    </>
  )
}

export default App
