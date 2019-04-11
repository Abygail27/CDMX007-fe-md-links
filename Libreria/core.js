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
    for (let i = 0; i < process.argv.length; i++) {  
      console.log(i + ' -> ' + (process.argv[i]));
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
                  
                  if (validate) {
                   validator.validateLinks(urls).then(function(resp){
                    if (stats) {
                      stadistics.printStats(urls, resp);
                    }else{
                      console.warn('total de links rotos: ' + resp.broken);
                    }
                   }); 
                  }else{
                    if (stats) {
                      stadistics.printStats(urls, {});
                    }
                  }
                  
                }
              }
            })
          }
          });//end foreach
        }
      })
    }
  
      
  markdownPath()
module.exports = markdownPath;