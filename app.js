(function () {
  "use strict";
  var App = this.App || {},
    qrcode;

  App.init = function () {
    qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 300,
        height : 300
    });
  }

  App.makeQRCode = function (elText) {
    // var elText = document.getElementById("stringToEncode");

    if (!elText) {
      alert("Input a text");
      elText.focus();
      return;
    }

    qrcode.makeCode(elText);
  }

  App.onKeyDown = function () {
    alert('ho');
  }

  this.App = App;
}).call(this);