import React from 'react'
import TodoItem from "./TodItem"

export default function Todos(props) {
  let mystyle = {
     minHeight:"57vh"
  }
  return (
    <div className="container" style={mystyle}> 
    <h3>My Todo LIst
    </h3>
    {props.todos.length === 0?"No Todos to Display":
    props.todos.map((todo)=> {return <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}/> ;})}
    
     
      </div>
   
  
  )
}

