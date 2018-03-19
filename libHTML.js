function writeToElement(element, text) {
  if (isString(element))
    element = document.getElementById("element");

  element.innerHTML = text;
}
function appendToElement(element, text) {
  if (isString(element))
    element = document.getElementById("element");

  element.innerHTML += text;
}
