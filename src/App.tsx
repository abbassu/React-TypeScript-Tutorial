import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet/Greet';
import Person from './component/person/person';
import PersonList from './component/personList/PersonList';
import Status from './component/status/Status';
import Header from './component/header/header';
import Oscer from './component/oscer/oscer';
import Button from './component/button/Button';
import Input from './component/input/Input';
import Container from './component/stylee/Container';
import { Authu } from './component/User/user';
import { Counter } from './component/counter/counter';
function App() {
  const [username,setusername]=useState("")

  const personName={
    firstName:"abbas",
    lastName: "Surakji"
  }
  const listname=[
    {
      first:"ahmas",
      last:"sulaiman"
    },
    {
      first:"ahmas11",
      last:"sulaiman"
    },
    {
      first:"ahmas222",
      last:"sulaiman"
    }
  ]


  return (
    <div className="App">
      <Greet name="abbas" message={12} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList name={listname}/>
      <Status status="loading"/>
      <Header> Abbas King</Header>
      <Oscer>
        <Header> Abbas King</Header>
      </Oscer>
      <hr />
      <Button handleClick={(event)=>{
        console.log("rrrrrrrrrrrrrrrrrrr")
      }}/>
      <Input value={username} handleChange={(event)=>{
        setusername(event.target.value)
      }}/>
      username:{username}
      <hr />
      <Container style={{border:"1px solid yellow" , padding:"1rem"}}/>
      <hr />
      <Authu/>
      <Counter/>
    </div>
  );
}

export default App;
