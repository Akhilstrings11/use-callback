import React, { memo } from 'react'

function ToDoList({randomToDo, setRandomTodo}) {
    console.log(randomToDo)
    console.log("to do list")
    
    return (
        <div>
            <h1>
                {randomToDo.map((item,index) => <h3>{item}</h3> )}
                <button onClick={() => setRandomTodo([...randomToDo, Math.random])}>Add Random</button>
            </h1>
        </div>
    )
}

export default memo(ToDoList)
