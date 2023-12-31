import React from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "./pokemonContext";

function PokemonTable() {
    const {
            state:{ pokemon, filter}
            , dispatch} = React.useContext(PokemonContext)
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
                    onSelect={(pokemon)=>
                        dispatch({ 
                            type: "SET_SELECTED_POKEMON",
                            payload:pokemon
                        })}/>
                ))
            }
            </tbody>    
        </table>
        
    )
}

export default PokemonTable;