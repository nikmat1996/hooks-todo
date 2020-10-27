import React, { useState } from 'react';

export default function Todo() {
    
    const [todo, setTodo] = useState([]);
    const [newtodo, setNewtodo] = useState("")
    
    const handleSubmit = e => {
        setTodo([...todo, {todo: newtodo, status: false}])
    }

    const handleDone = index => {
        const updated = [...todo]
        updated[index].status = true
        setTodo(updated)
    }

    const handleDelete = index => {
        const updated = todo.filter((item, i) => i !== index)
        setTodo(updated)
    }

    return (
        <>
            <div>
                <input onChange={(e) => setNewtodo(e.target.value)} type="text" placeholder="add todo..."/>   
                <button onClick={handleSubmit} >submit</button>   
            </div>

            <div>Yet to do</div>
            {todo && todo.map((item,index) =>
                !item.status ? <div id={index}>{item.todo} <button onClick={() => handleDone(index)} >done</button></div> : null)}       

            <div>Done</div>
            {todo && todo.map((item,index) =>
                item.status ? <div id={index}>{item.todo}<button onClick={() => handleDelete(index)} >delete</button></div> : null)}       

        </>
    )
}
