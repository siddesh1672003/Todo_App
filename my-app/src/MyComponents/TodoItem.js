import React from 'react'

// export default function TodoItem({todoItem}) {
//   return (
//     <>
//       <h4>{todoItem.title}</h4>
//       <p>{todoItem.desc}</p>
//       <button className='btn btn-sm btn-danger'>Delete</button>
//     </>
//     )
// }

//import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
      <h4>{todo.title}</h4>
       <p>{todo.desc}</p>
       <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
       

       
    </>                                                             /*  \__ it is an arrow function which passes onDelete method as an argument ,which passes todo as an argument. */
  )
}

