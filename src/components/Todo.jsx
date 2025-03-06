import React, { useState } from 'react'
import '../css/todo.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    const { id, content } = todo;

    const RemoveTodo = () => {
        onRemoveTodo(id);
    }

    const [editable, SetEditable] = useState(false);
    const [newContent, SetNewContent] = useState(content);

    const UpdateTodo = () => {

        if (!newContent) return;

        const request = {
            id: id,
            content: newContent
        };

        onUpdateTodo(request);

        SetEditable(false);
    }

    return (
        <div className='TodoItem'>

            <div className='TodoTextDiv'>
                {
                    editable ?
                        <input className='TodoUpdateInput' value={newContent} onChange={(e) => { SetNewContent(e.target.value) }}></input>
                        :
                        <p className='TodoText'>{content}</p>
                }

            </div>

            <div>
                {
                    editable ?
                        <FaCheck className='TodoIcons' onClick={UpdateTodo} />
                        :
                        <FaEdit className='TodoIcons' onClick={() => SetEditable(true)} />

                }
                <MdDelete className='TodoIcons' onClick={RemoveTodo} />
            </div>



        </div>
    )
}

export default Todo