import React from 'react'

function Functionclick() {
    function clickHandler()
    {
        console.log("button clicked")
    }
    return (
        <div>
            <h1></h1>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Functionclick
