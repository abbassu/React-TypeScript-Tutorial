import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet/Greet';
import Person from './component/person/person';
import PersonList from './component/personList/PersonList';
import Status from './component/status/Status';
import Header from './component/header/header';
import Oscer from './component/oscer/oscer';
function App() {

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
    </div>
  );
}

export default App;
