import React, { useState } from 'react'
import Done from './Done'
import Doing from './Doing'
import Todo from './Todo'
import './App.css'

function App() {
    const [todos,setTodos] = useState([])
    const [doing,setDoing] = useState([])
    const [done,setDone] = useState([])
    const [todoval,setTodoval] = useState("")
    const [doingval,setDoingval] = useState("")
    const [doneval,setDoneval] = useState("")

    const handleDelete = (id) => {
        setTodos(todos.filter((todo,index)=>{
            return index !== id
        }))
    }

    const handleMove = (id) => {
        setDoing([...doing,todos[id]])
        setTodos(todos.filter((todo,index)=>{
            return index !== id
        }))
    }

    const handleMove2 = (id) => {
        setDone([...done,doing[id]])
        setDoing(doing.filter((todo,index)=>{
            return index !== id
        }))
    }

    const handleDelete2 = (id) => {
        setDoing(doing.filter((todo,index)=>{
            return index !== id
        }))
    }

    const addDoing = () => {
        setDoing([...doing,doingval])
        setDoingval("")
    }

    const addTodo = () => {
        setTodos([...todos,todoval])
        setTodoval("")
    }

    const addDone = () => {
        setDone([...done,doneval])
        setDoneval("")
    }

  return (
    <div class='layout'>
        <div class='todo'>
        <h2>To-do</h2>
        <input type='text' value={todoval} onChange={(e)=>{
            setTodoval(e.target.value)
        }}></input>
        <button onClick={addTodo}>Add Todo</button>
        {todos.map((todo,index) => {
            return <Todo text={todo} handleDelete={handleDelete} handleMove={handleMove} index={index} />
        })}
        </div>
        <div class='todo'>
        <h2>Doing</h2>
        <input type='text' value={doingval} onChange={(e)=>{
            setDoingval(e.target.value)
        }}></input>
        <button onClick={addDoing}>Add Doing</button>
        {doing.map((doing,index) => {
            return <Doing text={doing} handleMove={handleMove2} handleDelete={handleDelete2} index={index} />
        })}
        </div>
        <div class='todo'>
        <h2>Done</h2>
        <input type='text' value={doneval} onChange={(e)=>{
            setDoneval(e.target.value)
        }}></input>
        <button onClick={addDone}>Add Done</button>
        {done.slice(0).reverse().map((done,index) => {
            return <Done text={done} index={index}/>
        })}
        </div>
    </div>
  )
}

export default App