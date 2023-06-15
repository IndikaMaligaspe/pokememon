import React from "react";


import PokemonType from "../PokemonType";

function PokemonInfo( {name:{english}, base}) {
    return (
      <div>
        <h1>{english}</h1>
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

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;