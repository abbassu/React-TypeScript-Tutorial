import { type } from 'os'
import React from 'react'
type InButton={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
function Button(props:InButton) {
  return (
    <button onClick={props.handleClick}>Butto</button>
  )
}

export default Button