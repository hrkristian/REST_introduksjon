'use strict';

function loader() {

}

function getCardInfo(element) {
  log("Parameter type: "+element);
  log("Clicked; connecting.");

  communicator("kek=bur", function() {
      if (this.readyState === 4 && this.status === 200) {
        writeToElement(element, "Response: "+this.responseText);
      } else {
        logToElement(element, "Response status code: "+this.status);
      }

  });
}
