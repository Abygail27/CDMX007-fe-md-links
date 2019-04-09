#!/usr/bin/env node

const index = require('./index');
const links = require('./linksrs');
const infoRequired = process.argv.splice(2);
const validate = infoRequired.includes('--validate');
const stats = infoRequired.includes('--stats');

if(infoRequired.length > 0) {
    if(infoRequired[0] !== '--validate' && infoRequired[0] !== '--stats') {
        index.lookFor(infoRequired[0]);
        
    } else {
        index.lookFor('./');
    }
  };

  const typeOfValidation = (array, files, path) => {
    if(validate && stats) {
        links.countigValidatedLinks(array, files, path);
    } else if (stats){
        links.counting(array, files, path);
    } else if (validate) {
        links.validatingLinks(array, files, path);
        
    }
  }

  module.exports.typeOfValidation = typeOfValidation;