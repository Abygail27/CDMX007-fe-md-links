// se exporta el validate para que muestre las stats

const main = require('./main');
const path = require('path');
const fs = require('fs'); //in a const, so we wont over write main

console.log('holi estoy en linksrs.js');
const markdownSearchLinks = (data) => {

  const regex = /(https?:\/\/[^\s]+)/g;
  const result = data.match(regex)
  console.log(result)

};



module.exports.markdownSearchLinks = markdownSearchLinks;
