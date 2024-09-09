import React from "react";
import { Link } from "react-router-dom";
import "./CharactersList.css";
import { UseCharacters } from "../hooks/UseCharacters";



export default function CharactersList () {
    
   const{data, error, loading} =UseCharacters ();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>something went wrong</p>;
    return <>
    <a href='/search' className='search-character'>Click here to Search your favourite character's dimensions</a>
    <div className="charactersList">
        {data.characters.results.map((character , index) =>(
            <Link to={`/${character.id}`} key={index} >
                <img src={character.image}/>
                <h2>{character.name}</h2>
            </Link>

        ))}
    </div>
    </>
}