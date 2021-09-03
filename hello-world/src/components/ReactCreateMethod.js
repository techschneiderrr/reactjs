import React from 'react'

const ReactCreateMethod = () => {
    return (
        React.createElement('div', {className:'hello',style:{color:"red"}}, 
        React.createElement('h1', null, 'Hello from a functional component not using jsx and onlu using react create element methhod'))
    )
}

export default ReactCreateMethod
