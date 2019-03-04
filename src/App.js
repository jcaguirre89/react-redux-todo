import React from 'react';

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters"
import "./styles.css"

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo />
        <VisibilityFilters />
        <TodoList />
      </div>
    )
  }
}
