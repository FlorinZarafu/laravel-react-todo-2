import React from "react";
import axios from "axios";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: {
                todo: ""
            }
        };
    }
    componentDidMount() {
        this.loadTodos();
    }
    loadTodos() {
        axios.get(`http://127.0.0.1:8000/api`).then(res => {
            this.setState({ todos: res.data });
            console.log(res.data);
        });
    }
    handleChange(e) {
        this.setState({
            newTodo: {
                todo: e.target.value
            }
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post(`http://127.0.0.1:8000/api/add`, this.state.newTodo)
            .then(res => {
                let { todos } = this.state;
                this.loadTodos();
                this.setState({
                    todos,
                    newTodo: {
                        todo: ""
                    }
                });
            });
    }
    deleteTodo(id) {
        axios.delete(`http://127.0.0.1:8000/api/delete/${id}`).then(res => {
            this.loadTodos();
        });
    }
    render() {
        const todolist = this.state.todos.map(todo => {
            return (
                <li key={todo.id}>
                    {todo.id} {todo.todo}
                    <button onClick={e => this.deleteTodo(todo.id)}>
                        Delete
                    </button>
                </li>
            );
        });
        return (
            <div>
                <h3>Todo Form</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        value={this.state.newTodo.todo}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button>Add</button>
                </form>
                <h3>Todo List</h3>
                <ul>{todolist}</ul>
            </div>
        );
    }
}
export default TodoList;
