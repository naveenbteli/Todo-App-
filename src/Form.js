import React, { useState } from 'react'

export default function Form(props) {

    const [title ,SetTitle] = useState("");
    const [desc ,SetDesc] = useState("");

    const submit=(e)=>{
      e.preventDefault();

      if(!title || !desc)
      {
        alert("Title or Desc Cannot be Empty");
      }
      else{
        props.addTodo(title,desc);
      }
     
    }
  return (
    <form className='container my-3' onSubmit={submit}>
        <h3>Add a Todo</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>

    <input type="text" className="form-control" id="title" onChange={(e)=> SetTitle(e.target.value)} value={title} />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>

    <input type="text" className="form-control"  id="desc" onChange={(e)=> SetDesc(e.target.value)}   value={desc} />

  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
