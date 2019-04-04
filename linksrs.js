// se exporta el validate para que muestre las stats

const main = require('./indexx');
const path = require('path');
const fs = require('fs'); //in a const, so we wont over write main

console.log('holi estoy en linksrs.js');
const mdlinks = (data) => {

  const regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  
  const result = data.match(regex)
  console.log(result)

};





module.exports.mdlinks = mdlinks;
