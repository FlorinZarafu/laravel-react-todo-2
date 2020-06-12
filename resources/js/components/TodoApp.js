import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./todo-components/TodoForm";
import TodoList from "./todo-components/TodoList";

const TodoApp = () => {
    return (
        <div>
            {/* <TodoForm /> */}
            <TodoList />
        </div>
    );
};

export default TodoApp;

if (document.getElementById("todo-app")) {
    ReactDOM.render(<TodoApp />, document.getElementById("todo-app"));
}
