import React, { useState } from 'react'
import '../css/todo.css'

function CreateTodo({ AddTodo }) {

    const [todoInput, SetTodoInput] = useState("");

    const CreateNewTodo = () => {

        if (!todoInput) return;

        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: todoInput
        }

        AddTodo(request);
        SetTodoInput("");
    }


    return (
        <>
            <div>
                <center><h1 className='createTodoTitle'>TODO APPLICATION</h1></center>
            </div>
            <div>
                <center>
                    <div className='createTodoDiv'>
                        <div>
                            <center>
                                <input type='text' className='createTodoInput' placeholder='Create a todo' value={todoInput} onChange={(e) => { SetTodoInput(e.target.value) }}></input>
                            </center>
                        </div>

                        <button className='createTodoButton' onClick={CreateNewTodo}>Ekle</button>

                    </div>
                </center>
            </div>

        </>
    )
}

export default CreateTodo