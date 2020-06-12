import React from "react";
import "./styles.css";
import axios from "axios";
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: {
                todo: ""
            }
        };
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
                this.setState({
                    ...this.state,
                    newTodo: {
                        todo: ""
                    }
                });
            });
    }
    render() {
        return (
            <div>
                <h3>Add Todo</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        value={this.state.newTodo.todo}
                        onChange={this.handleChange.bind(this)}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
export default TodoForm;
