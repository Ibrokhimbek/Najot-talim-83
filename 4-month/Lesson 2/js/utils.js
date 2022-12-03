function $(selector) {
  return document.querySelector(selector);
}

function isEmptyArray(arr) {
  return arr.length > 0 ? false : true;
}

function render(selector, value) {
  const el = document.querySelector(selector);
  el.textContent = value;
}
