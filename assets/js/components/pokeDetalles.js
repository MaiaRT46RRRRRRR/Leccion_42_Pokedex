'use strict';

const detallesPoke = (rs) => {
    alert("entro al modal detalles Pokes");
    const divModal = $('<div class="modal-dialog modal-lg" role="document"></div>');
    const divContent = $('<div class="modal-content gris-modal>'+stations.selectedStation.capture_rate+'</div>');
    const pokebola=$('<div class="pokeBola col-md-2"></div>');
    const figure =$('<figure class="pokenvase"></figure>');
    pokeBola.append(figure);
    divContent.append(pokeBola);
    divModal.append(divContent);
    // containerPoke.append(pokeApi);

    return divModal;
}
$('#pokeDetalles').on('click', function (event) {
  console.log('Holi boli');
  var modal = $(this);
  modal.empty();
  modal.append(detallesPoke(recipient, id, nombre));
});
