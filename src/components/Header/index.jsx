import React from 'react'
import PropsTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

class Header extends React.Component {

    static propsTypes = {
        addTodo: PropsTypes.func.isRequired
    }

    handleEnter = (event) => {
        const {keyCode, target} = event;
        if (keyCode !== 13) {
            return;
        }
        const name = target.value.trim();
        if (name === '') {
            alert('不能输入空串');
            return;
        }
        const todo = { id: nanoid(), name: name, done: false }
        console.log(todo);
        this.props.addTodo(todo);
        target.value = '';
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleEnter} />
            </div>
        );
    }
}

export default Header;