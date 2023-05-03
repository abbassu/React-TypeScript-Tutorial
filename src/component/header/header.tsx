import { type } from 'os'
import React from 'react'

type HeadingProps={
    children:string
}

function Header(props:HeadingProps) {
  return (
    <div>

    {props.children}

    </div>
  )
}

export default Header