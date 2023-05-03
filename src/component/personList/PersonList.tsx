import React from 'react'

type InPersonList={
    name:{
        first:string
        last:string
    }[]
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