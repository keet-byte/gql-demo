import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATION = gql `
     query GetCharacterLocations ( $name : String!) {
         characters( filter: {name: $name} ) {
            results {
              location {
                name
              }
            }
        }
     }
   `;
 
export const Search = () => {
   const [name , setName] = useState("");
   const [getLocations , {data,loading,error, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
    variables : {
      name,
  },
  });
  

  console.log(data,loading,error, called)

    return <div>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => getLocations()}>Search</button>
       
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
           {data.characters.results.map((character , index) => (
            <li key ={index}>
              {character.location.name}
            </li>
           ))}
        </ul>
      )
      }

    </div>
}