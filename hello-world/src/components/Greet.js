import React from 'react'

// function Greet(){
//     return <h1>Hello, Manav !!</h1>
// }

// this was default export
//  export default Greet

export const Greet = (props)=>{
   console.log(props)
   return(
      <div>
         <h1>Hello, {props.name} !!</h1>
         {props.children}
      </div>
   ) 
}