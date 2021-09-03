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
        // this.setState({
        //     count : this.state.count + 1
        // },()=>console.log(this.state.count))
        this.setState((prevState)=>({
          count : prevState.count + 1  
        }),()=>console.log(this.state.count))
    }
    incfive()
    {
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={()=>this.incfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
