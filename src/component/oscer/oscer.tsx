import { type } from 'os'
import React from 'react'
type InOscer={
    children: React.ReactNode
}
function Oscer(props:InOscer) {
  return (
    <div>in ocerance
        {props.children} 
    </div>
  )
}

export default Oscer