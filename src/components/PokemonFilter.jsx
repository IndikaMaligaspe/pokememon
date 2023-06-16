import React from "react";
import styled from "@emotion/styled";
import PokemonContext from "./pokemonContext";


const Input = styled.input`
  width:100%;
  font-size: x-large;
  padding: 0.2rem;
`

function PokemonFilter() {
    const {
        state :{filter}, 
        dispatch} = React.useContext(PokemonContext)
    return (
        <Input name="filter" 
            value={filter} 
            onChange={(evt) => 
              dispatch({
                type:"SET_FILTER",
                payload:evt.target.value
              })} />
    )
}

export default  PokemonFilter;