// se exporta el validate para que muestre las stats

const markdownPath = require('./core');
const path = require('path');
const fs = require('fs'); //in a const, so we wont over write main

const markdownSearchLinks = (data) => {
  console.log(markdownPath)
  const regex = /(https?:\/\/[^\s]+)/g;
  const result = data.match(regex);
  console.log(result);

};




module.exports.markdownSearchLinks = markdownSearchLinks;
