'use strict';

const detallesPoke = (update) => {

alert('Poke detalles');
// <!-- Large modal -->
// <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-lg">Large modal</button>
//
// <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
//   <div class="modal-dialog modal-lg" role="document">
//     <div class="modal-content">
//       ...
//     </div>
//   </div>
// </div>
  //Creando los modals

   const containerPoke = $('<div class="containerPoke modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"></div>');
   const pokeApi =$('<div class="modal-dialog modal-lg" role="document">');
   const modal-cont=$('<div class="modal-content">');
  // const hr =$('<hr>');
  // const name = $('<h5>'+'Grifo '+state.selectedStation.name +'</h5>');
  // const address = $('<p>'+'Grifo '+state.selectedStation.address +'</p>');
  // container.append(name);
  // container.append(hr);
  // container.append(address);
  //
  // const products = state.selectedStation.products ;
  // products.forEach(function(index){
  //   const valores  = $('<span class="lista">'+''+ index + '</span>');
  //   container.append(valores);
  // });
  //
  // const button = $('<br><button>Regresar</button>') ;
  // container.append(button);
  //
  // button.on('click',(e) => {
  //   e.preventDefault();
  //   state.selectedStation = null;
  //   update();
  // })

  // return container;
}
