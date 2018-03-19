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

  comm.onreadystatechange = responseHandler;
  comm.open("POST", "requestHandler.php", true);
  comm.setRequestHeader("Content-type", "text/plain");

  comm.send(request);
}
