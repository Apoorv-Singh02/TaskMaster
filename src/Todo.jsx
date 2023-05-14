import React from 'react'
import './Todo.css'

function Todo({text , handleDelete,handleMove, index}) {

  return (
    <div className='todo-comp'> 
        {text}
        <div>
        <button onClick={()=> {handleMove(index)}}>Move</button>
        <button onClick={()=>{handleDelete(index)}}>Delete</button>
        </div>
    </div>
  )
}

export default Todo