import React, { useState } from 'react'
import Counter from './Counter/Counter'
import ToDoList from './ToDoList/ToDoList'

function UseCallBack() {

    const [count, setCount] = useState(0)
    const [randomToDo, setRandomToDo] = useState([])
    console.log("Use Call Back")

    return (
        <div>
            <Counter count = {count} setCount = {setCount} />
            <ToDoList randomToDo = {randomToDo} setRandomToDo = {setRandomToDo}  />
        </div>
    )
}

export default UseCallBack
