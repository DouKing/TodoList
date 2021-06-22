/*
 * @Author: your name
 * @Date: 2021-06-01 10:24:46
 * @LastEditTime: 2021-06-22 10:37:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /todo-list/src/App.tsx
 */
import React from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends React.Component {

  state = {
    todos: [
      {id: '001', name: '学习 React', done: false},
      {id: '002', name: '学习 ES6', done: false},
      {id: '003', name: '学习 TypeScript', done: false}
    ]
  }

  checkAllOrNot = (flag: boolean) => {
    const { todos } = this.state;
    const newTodos = todos.map( todo => {
      const done = flag;
      return {...todo, done}
    });
    this.setState({ todos: newTodos });
  }

  updateTodo = (id: string, done: boolean) => {
    const { todos } = this.state;
    const newTodos = todos.map( todo => {
      if (todo.id === id) {
        return {...todo, done}
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodos });
  }

  deleteTodo = (id: string) => {
    const { todos } = this.state;
    const newTodos = todos.filter( todo => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  }

  addTodo = (todo: {}) => {
    const { todos } = this.state;
    const newTodos = [todo, ...todos];
    this.setState({ todos: newTodos });
  }

  clearDone = () => {
    const { todos } = this.state;
    if (todos.length < 1) { return; }
    const newTodos = todos.filter( todo => {
      return !todo.done;
    });
    this.setState({ todos: newTodos });
  }

  test = () => {
    let input = [1, 2];
    let [first, second] = input;
    console.log(first);     // outputs 1
    console.log(second);    // outputs 2

    [second, first] = [first, second];
    console.log(first, second);
  }

  render() {
    this.test();
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={todos} 
            updateTodo={this.updateTodo} 
            deleteTodo={this.deleteTodo}></List>
          <Footer todos={todos} checkAllOrNot={this.checkAllOrNot} clearDone={this.clearDone}></Footer>
        </div>
      </div>
    )
  }
}

export default App;
