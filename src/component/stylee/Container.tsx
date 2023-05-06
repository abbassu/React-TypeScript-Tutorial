import { type } from 'os'
import React from 'react'
type InContainer={
    style: React.CSSProperties
}

function Container(props:InContainer) {
  return (
    <div style={props.style}>Container</div>
  )
}

export default Container