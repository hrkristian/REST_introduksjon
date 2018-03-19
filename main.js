'use strict';

function loader() {

}

function postRequest(element) {
  writeToElement(element, "");

  communicator("whatIWant=json&areYouThere=No", function() {
      if (this.readyState === 4 && this.status === 200) {
        appendToElement(element, "Response:<br>"+this.responseText);
      } else {
        logToFooter("Response status code: "+this.status);
      }
  });
}

function getRequest(element) {

}
