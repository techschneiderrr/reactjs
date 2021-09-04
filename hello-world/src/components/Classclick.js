import React, { Component } from 'react'

export class Classclick extends Component {
    clickHandler()
        {
            console.log("click event")
        }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Classclick
