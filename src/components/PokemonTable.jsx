import React from "react";
import PokemonRow from "./PokemonRow";

function PokemonTable({pokemon, filter, setSelectedItem}) {
    return (
        <table width="100%">
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                </tr>

            </thead>
            <tbody>
            {
                pokemon
                .filter((pokemon) => pokemon.name.english.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
                .slice(0,20)
                .map((pokemon) =>(
                <PokemonRow 
                    key={pokemon.id}
                    pokemon={pokemon} 
                    onSelect={(pokemon)=>setSelectedItem(pokemon)}/>
                ))
            }
            </tbody>    
        </table>
        
    )
}

export default PokemonTable;