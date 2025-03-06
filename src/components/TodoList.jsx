import React from 'react'
import '../css/todo.css'
import Todo from './Todo'

function TodoList({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <>
            <center>
                <div className='TodoListDiv'>
                    <center>
                        {
                            todos && todos.map((todo) => (
                                <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo}></Todo>
                            ))
                        }
                    </center>

                </div>
            </center>
        </>

    )
}

export default TodoList