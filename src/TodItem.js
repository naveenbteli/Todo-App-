import React from 'react'

export default function TodoItem({todo,onDelete}) {
   
  return (
    <div className='card my-3 '>
      <div className='card-body'>
    <h4 className='card-title'> {todo.title}</h4>
    <p className='card-text'>{todo.des}</p>
     <button className='btn btn-sm btn-danger ' onClick={()=> onDelete(todo)}>Delete</button>
</div></div>
    
  )
}
