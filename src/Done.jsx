import React from 'react'
import './Todo.css'

function Done({text, handleDelete, index}) {

  return (
    <div className='todo-comp'>
      {text}
      <button onClick={()=>{handleDelete(index)}}>Delete</button>
    </div>
    
  )
}

export default Done