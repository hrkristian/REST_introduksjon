'use strict';

function log(text) {
  console.log(text);
}

// Tar enten i mot en direkte referanse til et element, eller ID'en
function logToElement(element, text) {
  if (isString(element))
    element = document.getElementById("element");

  element.innerHTML = text;
}

function logToFooter(text) {
  var footer = document.getElementById("errorFooter");
  footer.innerHTML += text+"<br>"+footer.innerHTML;
}
function clearFooter() {
  var footer = document.getElementById("errorFooter");
  footer.innerHTML = "";
}
