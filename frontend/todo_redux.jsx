import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodos, receiveTodo, removeTodo} from "./actions/todo_actions";
import { receiveSteps, receiveStep, removeStep} from "./actions/step_actions";
import Root from "./components/root.jsx"
import { allTodos } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.getElementById('root');
    const store = configureStore()
    // remove once in production
    window.store = store
    window.receiveTodos = receiveTodos
    window.receiveTodo = receiveTodo
    window.removeTodo = removeTodo
    window.receiveSteps = receiveSteps
    window.receiveStep = receiveStep
    window.removeStep = removeStep
    window.allTodos = allTodos

    ReactDOM.render(
        <Root store={store}/>, rootElement
    )
})

