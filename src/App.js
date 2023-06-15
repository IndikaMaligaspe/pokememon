import React from "react";


import "./App.css";
import styled from "@emotion/styled";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";

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

  const [filter, setFilter] = React.useState("");
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([]);

  React.useState(()=>{
    fetch("/pokememon/pokemon.json")
    .then(resp => resp.json())
    .then((data) => setPokemon(data));
  },[]);

  return (
    <Container>
      <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter 
              filter={filter}
              setFilter={setFilter}
            />
            <PokemonTable
               pokemon={pokemon}
               filter={filter}
               setSelectedItem={setSelectedItem}
            />
          </div>  
          <div>
              {
                selectedItem && (
                  <PokemonInfo 
                    {...selectedItem}

                  />
                )
              }
          </div>
      </TwoColumnLayout>  
    </Container>
  );
}

export default App;
