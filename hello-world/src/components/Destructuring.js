import React from 'react'
//destructuring directly in the function parameter
// const Destructuring = ({name, heroName, nickName}) => {
//     return (
//         <div>
//             <h1>Hey {name}, I know you are {heroName} A.K.a {nickName}</h1>
//         </div>
//     )
// }

//destructuring by assigning the props objects to the variables
const Destructuring = props => {
    const {name, heroName, nickName} = props
    return (
        <div>
            <h1>Hey {name}, I know you are {heroName} A.K.A {nickName}</h1>
        </div>
    )
}
export default Destructuring