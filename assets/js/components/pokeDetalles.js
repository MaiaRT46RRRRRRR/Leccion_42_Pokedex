'use strict';

const detallesPoke = (rs) => {
    alert("entro al modal detalles Pokes");
    const divModal = $('<div class="modal-dialog modal-lg" role="document">holi Boli</div>');
    const divContent = $('<div class="modal-content>'+stations.selectedStation.capture_rate+'</div>');

    divModal.append(divContent);

    return divModal;
}
$('#pokeDetalles').on('click', function (event) {
  //alert('Sal Holi Boli')
  var modal = $(this);
  //modal.empty();
  modal.append(detallesPoke());
});
