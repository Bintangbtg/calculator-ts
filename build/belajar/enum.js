"use strict";
var bulan;
(function (bulan) {
    bulan["januari"] = "bulan ke 1";
    bulan["februari"] = "bulan ke 2";
    bulan["maret"] = "bulan ke 3";
    bulan["april"] = "bulan ke 4";
    bulan["may"] = "bulan ke 5";
})(bulan || (bulan = {}));
console.log(bulan.januari);
