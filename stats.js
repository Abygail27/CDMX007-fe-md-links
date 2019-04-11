#!/usr/bin/env node
const linksStats = require('./Libreria/linksrs');
const request = require('request');

const printStats = (urls, validation) => {
    console.log(`Total de links: ${urls.size} `);
    if(validation.broken){
      console.log(`Total de links rotos: ${validation.broken} `);
    }
};
  
module.exports.printStats = printStats; 


