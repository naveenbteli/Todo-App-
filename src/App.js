
import './App.css';
import Header from './header';
import Todos from './Todos';
import Footer from './footer';
import { useState } from 'react';
import Form from './Form';


function App() {

  const addTodo =(title,desc)=>
  {
     console.log("added",title,desc);
     let sno;
     if(todos.length === 0)
     {
        sno =0;
     }
     else{
       sno = todos[todos.length-1].sno+1;

     }

     const myTodo ={
       
      sno : sno,
      title :title,
      des: desc,
     }
     setTodos([...todos,myTodo]);

  }
  const onDelete = (todo) => {
         
   

     setTodos( todos.filter((e)=> {return e!==todo} ));
  } 
  const [todos , setTodos] = useState( []);
  return (
    <>
    <Header title="MY TodoList App" searchBar={false}/>
    <Form addTodo ={addTodo}/>
    <Todos todos = {todos} onDelete ={onDelete}/>
    <Footer/>

    </>
  )
}

export default App;
