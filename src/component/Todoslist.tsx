import React from 'react'
import classes from './Todolist.module.css'


const Todoslist: React.FC <{text:string, onRemoveTodo:()=>void}> = (props) => {
  return (
    <li className={classes.list} onClick={props.onRemoveTodo}>{props.text}</li>
  )
}

export default Todoslist