import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            count :0
        }
    }

    incrementCounter()
    {
        this.setState({
            count : this.state.count + 1
        },()=>console.log(this.state.count))
        
    }

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={()=>this.incrementCounter()}>Increment</button>
            </div>
        )
    }
}

export default Counter
