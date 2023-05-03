import React from 'react'

type InPerson={
    name:{
        firstName:string,
        lastName: string
      }
}



function Person(props:InPerson) {
  return (
    <div>

    {props.name.firstName}
    {props.name.lastName}


    </div>
  )
}

export default Person