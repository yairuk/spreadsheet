
'use strict';

(function main() {
  let inputs = [];
  for (let i = 0; i < 4; i++) {
    const row = document.querySelector('table').insertRow(-1);
    for (let j = 0; j < 4; j++) {
      const letter = String.fromCharCode("A".charCodeAt(0) + j - 1);
      if (i && j) {
        row.insertCell(-1).innerHTML = "<input id='" + letter + i + "'/>";
      } else {
        row.insertCell(-1).innerHTML = i || letter;
      }
    }
  }
  inputs = document.querySelectorAll('input');
})();