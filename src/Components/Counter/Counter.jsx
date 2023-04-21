import React from 'react'

function Counter({count, setCount}) {

    console.log("Counter")

    return (
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter
