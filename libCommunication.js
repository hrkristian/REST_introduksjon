'use strict';
/*
Brukes til å sende en request mot en server og behandle svar.

–––––––– Forklaringer ––––––––
** XMLHttpRequest
Dette objektet holder styr på hva som skal sendes, hva som skal gjøres
når en respons mottas, osv.
*/
function communicator(request, responseHandler) {

  var comm = new XMLHttpRequest();

  comm.open("POST", "requestHandler.php", true);
  comm.onreadystatechange = responseHandler;
  comm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  comm.send(request);
}
