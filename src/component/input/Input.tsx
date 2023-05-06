import { type } from 'os'
import React from 'react'

type InInput={
    value:string
    handleChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}


function Input(props:InInput) {

    const handleInputChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log("ffff")
    }


  return (
    <div>
        <input type="text" value={props.value} onChange={
            (e)=>{props.handleChange(e)}
        }
             />
    </div>
  )
}

export default Input