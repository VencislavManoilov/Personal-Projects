import React from 'react'

export default function Todo({ todo, toggleTodo }) {

    function handleChange() {
        toggleTodo(todo.id);
    }

    return (
        <div className='todo'>
            <label>
                <input type='checkbox' checked={todo.complete} onChange={handleChange} />
                {todo.name}
            </label>
        </div>
    )
}
