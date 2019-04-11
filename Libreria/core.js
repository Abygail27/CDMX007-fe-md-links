#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const finddir = require('../index');
const searchURL = require('./linksrs');
const validator = require('../validate');
const stadistics = require('../stats');



const markdownPath = () => {
  let validate = false;
  let stats = false;
  if(process.argv.length > 0){
    for (let i = 0; i < process.argv.length; i++) {  //argumento desde la ejecución de la posición 0.
      console.log(i + (process.argv[i]));            //argumentos de la posición donde se encuentra.    
      if(process.argv[i] === '--validate'){
        validate = true;
      }
      if(process.argv[i] === '--stats'){
        stats = true;
      }
    }
 
    }
    
    fs.readdir('./', (err, data) => {
      if (err) {
        console.log('error', err);
      } else {
        data.forEach(element => {
          if (path.extname(element) === ".md") {
            fs.readFile(element, 'utf-8', (err, data) => {
              {
                if (err){
                  console.log('ERROR', err);
                }                
                else{
                  let urls = searchURL.markdownSearchLinks(data);
                  let validation = {};
                  if (validate) {
                    validation = validator.validateLinks(urls); 
                  }
                  if (stats) {
                    stadistics. statstt(urls, validation);
                  }
                }
              }
            })
          }
          });//TERMINA FOREACH
        }
      })
    }//TERMINA MARKDOWNPATH
  
      
  markdownPath()
module.exports = markdownPath;
