import React from "react";
import PokemonType from "../PokemonType";
import PokemonContext from "./pokemonContext";

function PokemonInfo() {
    const {selectedItem} = React.useContext(PokemonContext)
    return selectedItem ? (
      <div>
        <h1>{selectedItem.name.english}</h1>
        <table>
          <tbody>
           {
            Object.keys(selectedItem.base).map((k) => {
               return (
                <tr key={k}>
                  <td>{k}</td>
                  <td>{selectedItem.base[k]}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    ) : null;
  }

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;