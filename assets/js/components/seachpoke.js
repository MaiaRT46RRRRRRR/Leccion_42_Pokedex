'use strict';

const pokeDetail = (detail,update) => {

  const pokeContainer = $('<div class="pokeContainer"></div>');
  const imgRuta=('000'+detail.entry_number).slice(-3);
  const pokebola=$('<div class="pokeBola col-md-2"></div>');
  const figure =$('<figure class="pokenvase"></figure>');
  const fondo =$('<div class="fondo text-center"></div>');
  const icon1=$('<a href="#pokeDetalles" class="icono pokedetalle"  data-toggle="modal" data-target="#pokeDetalles"></a>');
  const icon2=$('<img class="icono" src="assets/icon/valentines-heart.png">');
  const icon3=$('<img class="icono" src="assets/icon/data.png">');
  const name = $('<p class="text-center font-mayu">'+ detail.pokemon_species.name + '</p>');
  const img = $('<img src="http://serebii.net/art/th/'+detail.entry_number+'.png" class="img-responsive">');

  fondo.append(icon1);
  fondo.append(icon2);
  fondo.append(icon3);
  figure.append(img);
  pokebola.append(figure);
  pokebola.append(fondo);
  pokebola.append(name);
  pokeContainer.append(pokebola);

  // icon1.on('click', (e)=> {
  //     // e.preventDefault();
  //     $.get(detail.pokemon_species.url,(rs)=>{
  //           state.selectedStation = rs;
  //           update();
  //      });
  // });
  return pokeContainer;
 }

const reRender = (item)=>{
  item.empty();
}

const searchPoke = (update) => {
  const divcont=$('<div class="pes"></div>');
  const input = $('#buscar');

    input.on('keyup',(e) => {
        if(input.val() !=""){
          reRender(divcont);
          const filtrados = filterByPokemon(state.stations.pokemon_entries ,input.val());

            if (filtrados.length == 0) {
              alert("No existe ningún pokemon con ese nombre");
            }else {
              filtrados.forEach( function(index) {
                divcont.append(pokeDetail(index,update));
              });
             }
            // searchContainer.append(container_grifos);
          } else {
            const todos = filterByPokemon(state.stations.pokemon_entries ,"");
                  todos.forEach(function(index){
                  divcont.append(pokeDetail(index,update));
            });
          }
    });
  return divcont;
}
