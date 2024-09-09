import React from 'react';
import './App.css'
import CharactersList from './pages/CharactersList' ;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Character } from './pages/Character';
import { Search }  from './pages/Search'; 

function App() {
  

  return (
    <div className='AppComponent'>
      <h1 className='title'>Rick and Morty Characters</h1>
        <Routes>
            <Route strict exact path="/"  Component={CharactersList}/>
            <Route strict exact path="/Search"  Component={Search}/>
            <Route strict exact path="/:id"  Component={Character}/>
        </Routes>
        
    </div>
  )
}

export default App
