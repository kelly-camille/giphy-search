import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CryptoService from './project.js';
function getCrypto() {
  let promise = CryptoService.getCrypto();
  promise.then(function(cryptoDataArray) {
    printElements(cryptoDataArray);
  }, function(errorArray) {
    printError(errorArray);
  });
}


// UI Logic ----------
 
function printElements(data) {
  console.log(data[0][1])
  document.getElementById('cryptoName1').innerText = `${[data[0][0].name]}`;
  document.getElementById('cryptoName2').innerText = `${[data[0][1].name]}`;
  document.getElementById('cryptoName3').innerText = `${[data[0][2].name]}`;
}

function formHandler(event) {
  event.preventDefault();
  getCrypto();
}


window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", formHandler);
}) 