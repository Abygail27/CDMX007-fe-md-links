//--TO DO--
// se exporta el validate para que muestre las stats //href: URL encontrada.
//text: Texto que aparecía dentro del link (<a>). //file: Ruta del archivo donde se encontró el link.

const markdownPath = require('./core');
const path = require('path');
const fs = require('fs'); //in a const, so we wont over write main

const markdownSearchLinks = (data) => {

  const regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

  const result = data.match(regex);
  console.log(result);

};




module.exports.markdownSearchLinks = markdownSearchLinks;
