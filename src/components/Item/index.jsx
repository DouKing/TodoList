import React from 'react'
import './index.css'

class Item extends React.Component {
    state = { mouse: false }

    handleMouseMove = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleCheckChange = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm('确定删除吗')) {
                this.props.deleteTodo(id);
            }
        }
    }

    render() {
        const { todo } = this.props
        const { mouse } = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} 
                onMouseEnter={this.handleMouseMove(true)} 
                onMouseLeave={this.handleMouseMove(false)}>
                <label>
                    <input type="checkbox" checked={todo.done} onChange={this.handleCheckChange(todo.id)} />
                    <span>{todo.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? "block" : "none"}} onClick={this.handleDelete(todo.id)}>删除</button>
            </li>
        );
    }
}

export default Item;