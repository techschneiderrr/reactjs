import React, { Component } from 'react'

export class DestClass extends Component {
    render() {
        const {name, heroName, nickName} = this.props
        return (
            <div>
                <h1>Hey {name}, I know you are {heroName} A.K.A {nickName}</h1>                
            </div>
        )
    }
}

export default DestClass
