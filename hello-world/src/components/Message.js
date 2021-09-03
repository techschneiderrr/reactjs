import React, { Component } from 'react'

class Message extends Component {
    constructor()
    {
        super()
        this.state = {
            mes : 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            mes : 'Thankyou for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.mes}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Message