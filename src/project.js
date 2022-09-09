export default class CryptoService {
  static getCrypto() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=BTC,ETH,USDT&interval=1d,30d&convert=EUR&per-page=100&page=1&sort=rank`;
      console.log(url);
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response]);
        } else {
          reject([this, response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

