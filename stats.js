#!/usr/bin/env node
const linksStats = require('./Libreria/linksrs');
const request = require('request');
const colors = require('colors');

const statstt= (urls, validation) => {
    console.log(`Total de links: ${urls.size} `);
    if(validation.broken){
      console.log(`Total de links rotos: ${validation.broken} `);
    }
};
  
module.exports.statstt = statstt; 


