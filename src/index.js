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

function printElements(apiResponse) {
  console.log("hello")
  document.getElementById('cryptoName1').innerText = `${apiResponse.data[0].name}`;
}

function printError(apiResponse) {
  document.getElementById("cryptoName1").innerText = `THERE WAS AN ERROR ACCESSING CURRENCY NAME DATA for ${apiResponse.error[2]}: ${apiResponse.error[0].status} ${apiResponse.error[0].statusText}: ${apiResponse.error[1].message}`;
}

function formHandler(event) {
  event.preventDefault();
  getCrypto();
}


window.addEventListener("load", function() {
  document.querySelector("#button").addEventListener("submit", formHandler)
})
  
