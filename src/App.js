import React from 'react'
import './style/todo.scss'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  )
}

export default App;