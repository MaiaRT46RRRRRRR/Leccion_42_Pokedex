'use strict';

const detallesPoke = (rs) => {
    alert("entro al modal detalles Pokes");
    const divModal = $('<div class=""></div>');
    const divContent = $('<div class="col-md-12">'+stations.selectedStation.capture_rate+'</div>');

    divModal.append(divContent);
    // containerPoke.append(pokeApi);

    return divModal;
}
// $('#pokeDetalles').on('show.bs.modal', function (event) {
//   console.log('Holi boli');
//   var modal = $(this);
//   modal.empty();
//   modal.append(detallesPoke(recipient, id, nombre));
// });
