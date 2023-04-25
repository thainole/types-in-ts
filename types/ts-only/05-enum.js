"use strict";
/*
SINTAXIS:

enum nombreEnum {
  valores
}
*/
// Numérico
/*
enum MediaType {
  Image, //0
  Audio, //1
  Video, //2
}

console.log(MediaType.Video); // output: 2

enum Sound {
  Image = 10, //10
  Audio, //11
  Video, //12
}
console.log(MediaType.Audio); // output: 11
*/
// STRING (Todos deben tener un valor)
var MediaType;
(function (MediaType) {
    MediaType["Image"] = "image";
    MediaType["Audio"] = "audio";
    MediaType["Video"] = "video";
})(MediaType || (MediaType = {}));
console.log(MediaType.Image); // output: 'image'
