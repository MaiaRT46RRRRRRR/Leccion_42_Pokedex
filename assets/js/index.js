'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if (state.selectedStation == null) {
      wrapper.append(searchPoke( _ => {
          render(root);
      }));

   }
    else {
      alert("ultima esperanza");
      wrapper.append(detallesPoke( _ => {
          render(root);
      }));
  }

  root.append(wrapper);
};

const update = function (){
  render(root);
};

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});
