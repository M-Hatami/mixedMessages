"use strict";
const Ayaat = require("./ayaat.json");
const AyaatLength = Object.keys(Ayaat).length;
let random = Math.floor(Math.random()*AyaatLength+1);
console.log(Ayaat[random].translate.split("").reverse().join(""));
console.log(Ayaat[random]);