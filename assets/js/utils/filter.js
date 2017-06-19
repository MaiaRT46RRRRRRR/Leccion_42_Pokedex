'use strict';

const filterByPokemon = (stations,query) => {
  
  const select =stations.filter(function(index) {
    return (index.pokemon_species.name.toLowerCase().indexOf(query.toLowerCase())!= -1);

  })
  return select;
}
