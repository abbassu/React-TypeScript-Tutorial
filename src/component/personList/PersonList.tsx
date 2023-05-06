import React from 'react'
import { Name } from '../person/typee'
type InPersonList={
    name:Name[]
}

function PersonList(props:InPersonList) {
  return (
    <div>
        {props.name.map((name)=>{
            return(
                <h2 key={name.first}>
                    {name.first}
                    {name.last}
                </h2>
            )
        })}
    </div>
  )
}

export default PersonList