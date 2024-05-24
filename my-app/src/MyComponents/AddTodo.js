import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const onSubmit = ()=>{}
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={props.addTodo}>
            <div class="mb-3">
                <label for="title" class="form-label">Todo Title </label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Description</label>
                <input type="text" class="form-control" id="desc"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button class="btn btn-primary btn-sm bg-success">Add Todo</button>
        </form>
        </div>
        
    )
}

//export default AddTodo
