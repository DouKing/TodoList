import React from 'react'
import './index.css'

class Footer extends React.Component {
    handleChange = (event) => {
        this.props.checkAllOrNot(event.target.checked);
    }

    clearDone = () => {
        this.props.clearDone();
    }

    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        const total = todos.length;
        const isChecked = total !== 0 && total === doneCount;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={isChecked} onChange={this.handleChange} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.clearDone}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;