import { type } from 'os'
import React from 'react'

type InGreet={
    name: string
    message? : number
    isLoggedIn: boolean
}

function Greet(props:InGreet) {
  return (

    <div>
    
        <h1>Greet {props.name} {props.message}
            {props.isLoggedIn ? 
            <h1>
            </h1>
            :""
        }
        </h1>
        
    </div>
  )
}

export default Greet