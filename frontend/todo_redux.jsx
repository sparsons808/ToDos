import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo} from "./actions/todo_actions"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore()
    // remove once in production
    window.store = store
    window.receiveTodos = receiveTodos
    window.receiveTodo = receiveTodo
    window.removeTodo = removeTodo

    ReactDOM.render(
        <h1>Todos App</h1>, root
    )
})

