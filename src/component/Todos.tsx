import React from 'react'
import Todo from '../models/todo'
import Todoslist from './Todoslist'
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[], onRemoveTodo:(id:string)=>void }> = (props) => {

  return (
    
        <ul className={classes.todos}>
        {props.items.map((item)=> 
           <Todoslist key={ item.id} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)} text ={item.text} /> 
         )}</ul>
  )
}

export default Todos