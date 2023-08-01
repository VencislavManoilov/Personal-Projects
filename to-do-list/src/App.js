import React, { useState, useRef, useEffect } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';
import './main.css'

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if(name === '') {
            return
        }

        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
        });

        todoNameRef.current.value = null;
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleAddTodo();
        }
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodos(newTodos);
    }

    function handleDeleteAll() {
        setTodos([]);
    }

    return (
        <div className="app">
            <div className="text">{todos.filter(todo => !todo.complete).length} left to do</div>
            <ToDoList todos={todos} toggleTodo={toggleTodo} />
            <div className="newTodo">
                <input ref={todoNameRef} type="text" placeholder="Type something to do" onKeyPress={handleKeyPress} />
                <button className="button" id="add" onClick={handleAddTodo}>Add To Do</button>
            </div>
            <button className="button" id="clear" onClick={handleClearTodos}>Clear Completed</button>
            <button className="button" id="delete" onClick={handleDeleteAll}>Delete All</button>
        </div>
    );
}

export default App;