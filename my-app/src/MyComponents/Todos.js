import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length ===0 ? 'No todos to display':                         //if the todos object becomes empty then it shall display todos is empty otherwise it would render todoTtem.
      props.todos.map((todo)=>{                                                 //it is equivalent to 'for loop'. it is used to iterate over all the items in todos
      return<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>    /* todo object & onDelete method is passed to TodoItem.js */
      })
      }
    </div>
  )
}

//export default Todos


