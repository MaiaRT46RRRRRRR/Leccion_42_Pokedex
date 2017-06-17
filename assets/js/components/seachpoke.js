'use strict';

const pokeDetail = (detail,update) => {

  const pokeContainer = $('<div class="pokeContainer"></div>');
  const pokebola=$('<div class="pokeBola col-md-2"></div>');
  const figure =$('<figure class="pokenvase"></figure>');
  const fondo =$('<div class="fondo text-center"></div>');
  const icon1=$('<a class="icono pokedetalle" href="#"></a>');
  const icon2=$('<img class="icono" src="assets/icon/valentines-heart.png">');
  const icon3=$('<img class="icono" src="assets/icon/data.png">');
  const name = $('<p class="text-center font-mayu">'+ detail.pokemon_species.name + '</p>');
  const img = $('<img src="http://serebii.net/art/th/'+detail.entry_number+'.png" class="img-responsive">');

  fondo.append(icon1);
  fondo.append(icon2);
  fondo.append(icon3);
  figure.append(img)
  pokebola.append(figure);
  pokebola.append(fondo);
  pokebola.append(name);
  pokeContainer.append(pokebola);

  icon1.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = detail;
    console.log(detail);
    update();
  });
  return pokeContainer;
}

const reRender = (item)=>{
  item.empty();
}

const searchPoke = (update) => {
  const divcont=$('<div></div>');
  const input = $('#buscar');

    input.on('keyup',(e) => {
        if(input.val() !=""){
          reRender(divcont);
          const filtrados = filterByDistrict(state.stations.pokemon_entries ,input.val());
          console.log(filtrados);
            if (filtrados.length == 0) {
              alert("No existe ningun pokemon con ese nombre");
            }else {
              filtrados.forEach( function(index) {
                divcont.append(pokeDetail(index,update));
              });
             }
            // searchContainer.append(container_grifos);
          } else {
            const todos = filterByDistrict(state.stations.pokemon_entries ,"");
                  todos.forEach(function(index){
                  divcont.append(pokeDetail(index,update));
            });
          }
    });
  return divcont;
}
