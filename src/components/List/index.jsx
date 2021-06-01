import React from 'react'
import PropsTypes from 'prop-types'
import Item from '../Item'
import './index.css'

class List extends React.Component {
	// 类型限制
	static propTypes = {
		todos: PropsTypes.array.isRequired,
		updateTodo: PropsTypes.func.isRequired,
		deleteTodo: PropsTypes.func.isRequired
	}

	render() {
		const { todos, updateTodo, deleteTodo } = this.props
		return (
			<ul className="todo-main">
				{
					todos.map(todo => {
						return <Item key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
					})
				}
			</ul>
		);
	}
}

export default List;