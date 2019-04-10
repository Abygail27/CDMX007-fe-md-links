#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const finddir = require('./index');
const searchURL = require('./linksrs');
const validator = require('./validate');

const markdownPath = () => {
  let validate = false;
  if(process.argv.length > 0){
    for (let i = 0; i < process.argv.length; i++) {  
      console.log(i + ' -> ' + (process.argv[i]));
      if(process.argv[i] === '--validate'){
        validate = true;
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
                  validator.validateLinks(urls);
                }
              }               
            }
          });
        }
      })
    }
  })
}
markdownPath()
module.exports = markdownPath;