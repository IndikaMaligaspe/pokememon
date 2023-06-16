import React from "react";

import "./App.css";
import styled from "@emotion/styled";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonContext from "./components/pokemonContext";



const pokemnonRedcuer = (state, action) =>{
   switch (action.type) {
      case "SET_FILTER":
        return {
          ...state,
          filter:action.payload
        };
      case "SET_SELECTED_POKEMON":
        return {
          ...state,
          selectedItem:action.payload
        };
      case "SET_POKEMON":
        return {
          ...state,
          pokemon:action.payload
        };
      default:
        throw new Error("No Action") ;  
   }
}

const Title = styled.h1`
  text-align: center;
`

const TwoColumnLayout = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-column-gap: 1rem;
`
const Container = styled.div`
    margin: auto;
    width: 800px;
    padding-top: 1rem;

`

function App() {
  const [state, dispatch] = React.useReducer(pokemnonRedcuer, {
    pokemon: [],
    filter:"",
    selectedItem: null,
  });

  React.useEffect(()=>{
    fetch("/pokememon/pokemon.json")
    .then(resp => resp.json())
    .then((data) => 
        dispatch({
          type:"SET_POKEMON",
          payload:data
        })
      );
  },[]);



  return (
    <>
      {
        !state.pokemon? 
          <div> Loading Data </div>
        : <PokemonContext.Provider 
            value ={{
              state, dispatch,
            }}>
          <Container>
            <Title>Pokemon Search</Title>
              <TwoColumnLayout>
                <div>
                  <PokemonFilter/>
                  <PokemonTable/>
                </div>  
                <div>
                  <PokemonInfo/>
                </div>
            </TwoColumnLayout>  
          </Container>
        </PokemonContext.Provider>
      }
    </>
  );
}

export default App;
