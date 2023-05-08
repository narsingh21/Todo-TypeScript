import {useRef}  from 'react'
import classes from './Newtodo.module.css'


const NewTodo:React.FC<{onAddTodo:(text:string)=>void}> = (props) => {
    const todotextInputRef = useRef<HTMLInputElement>(null)
    const submitHandler= (event:React.FormEvent)=>{
        event.preventDefault()
       const enteredText = todotextInputRef.current!.value
       if(enteredText.trim().length===0){
            return 
       }

       props.onAddTodo(enteredText)
    }
  return (
    <form className ={classes.form}onSubmit={submitHandler}>
        <label className={classes.label} htmlFor="text">Todo List App</label>
        <input className={classes.input} type="text" id='todo'  ref={todotextInputRef}/>
        <button className={classes.btn} type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo