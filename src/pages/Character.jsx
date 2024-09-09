import React from "react";
import { UseCharacter } from "../hooks/UseCharacter";
import { useParams } from "react-router";
import "./Character.css";

export const Character = () => {
    const {id} =useParams();
    const { data, error, loading } = UseCharacter(id);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>something went wrong</p>;
    return <div className="character">
        <img src={data.character.image} width={450} height={450}/>
        <div className="character-content"> 
            <h1>{data.character.name}</h1>
            <p><strong>Gender</strong> - {data.character.gender}</p>
            <div className="character-episode">
               {data.character.episode.map((episode , index) =>{
                return(
                    <div key={index}>{episode.name} - <b>{episode.episode}</b></div>
               );
               })}
            </div>
              
        </div>

    </div>
}