import React from "react";
import PropTypes from "prop-types";

import "./App.css";
import styled from "@emotion/styled";


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
const Input = styled.input`
  width:100%;
  font-size: x-large;
  padding: 0.2rem;
`

function PokemonInfo( {name, base}) {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        <tbody>
         {
          Object.keys(base).map((k) => {
             return (
              <tr key={k}>
                <td>{k}</td>
                <td>{base[k]}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

PokemonInfo.protoTypes = {
  name:PropTypes.shape({
    english:PropTypes.string,
  }),
  base: PropTypes.shape({
    HP: PropTypes.number.isRequired,
    Attack: PropTypes.number.isRequired,
    Defense: PropTypes.number.isRequired,
    "Sp. Attack": PropTypes.number.isRequired,
    "Sp. Defense": PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
  }),
}

function PokemonRow({pokemon, onSelect}) {
      return (<tr key={pokemon.id}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(",")}</td>
            <td>
              <button onClick={()=>onSelect(pokemon)}>Select !</button>
            </td>
          </tr>
        )
}

PokemonRow.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.shape({
      english:PropTypes.string
    }), 
    type: PropTypes.arrayOf(PropTypes.string)
  }),
  onSelect: PropTypes.func,
}

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
          <Input name="filter" 
          value={filter} 
          onChange={(evt) => setFilter(evt.target.value)} />
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
