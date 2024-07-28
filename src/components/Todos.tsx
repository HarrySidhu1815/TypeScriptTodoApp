import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'
import { TodoContext } from '../store/todo-context'

export const Todos: React.FC = (props) => {
    const todoContext = useContext(TodoContext)
  return (
    <ul className={classes.todos}>
      {todoContext.items.map(item => (<TodoItem key={item.id} text={item.text} onRemoveTodo={todoContext.removeTodo.bind(null, item.id)}/>))}
    </ul>
  )
}
