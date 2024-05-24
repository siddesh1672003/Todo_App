import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import { useState } from 'react';
import {AddTodo} from './MyComponents/AddTodo';


function App() {
  const onDelete=(todo)=>{
    console.log('I am on delete task', todo);
    //deleting this way in react doesnt work.
    /* let index = todos.indexOf(todo);
    todos.splice(index, 1) */

    //using useState Hook
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

  }
  const[todos, setTodos] = useState([                    //setTodos is a function which sets the value of the array in useState to todos state variable. 
    {
      sno : 1,
      title : 'Go to the Market',
      desc: 'You need to go to the market'
    },
    {
      sno : 2,
      title : 'Study for exam',
      desc: "You need to study for tommorrow's exam"
    },
    {
      sno : 3,
      title : 'Exercise Regularly',
      desc: "You need to exercise regularly to keep yourself fit"
    },
  ])
  
  
  return (
    <>
      <Header title="My Todos" searchbar={true}/> 
      <AddTodo/>                                           {/*parent component*/}
      <Todos todos = {todos} onDelete={onDelete}/>         {/*onDelete is a method which is passed to Todo.js*/}
      <Footer/>
      
    </>
    
  
  );
}

export default App;
