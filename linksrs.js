// se exporta el validate para que muestre las stats

const markdownPath = require('./core');
const path = require('path');
const fs = require('fs'); //in a const, so we wont over write main

const markdownSearchLinks = (data) => {
  console.log(markdownPath)
  const regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

  const result = data.match(regex);
  console.log(result);

};




module.exports.markdownSearchLinks = markdownSearchLinks;
