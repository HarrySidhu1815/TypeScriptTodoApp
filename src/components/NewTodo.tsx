import React, { useContext, useRef } from 'react'
import classes from './NewTodo.module.css'
import { TodoContext } from '../store/todo-context'

const NewTodo: React.FC = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const todoContext = useContext(TodoContext)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if(enteredText.trim().length === 0){
            return
        }

        todoContext.addTodo(enteredText)

    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>New Todo</label>
      <input type='text' id='text' ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
