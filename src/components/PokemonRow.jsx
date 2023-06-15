import React from "react";

import PropTypes from "prop-types";

import Button from '@mui/material/Button';

function PokemonRow({pokemon, onSelect}) {
    return (<tr key={pokemon.id}>
          <td>{pokemon.name.english}</td>
          <td>{pokemon.type.join(",")}</td>
          <td>
            <Button 
              variant="contained"
              onClick={()=>onSelect(pokemon)}>More Info !</Button>
          </td>
        </tr>
      )
}

PokemonRow.rowTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.shape({
        english:PropTypes.string
      }), 
      type: PropTypes.arrayOf(PropTypes.string)
    }),
    onSelect: PropTypes.func,
};
export default PokemonRow;