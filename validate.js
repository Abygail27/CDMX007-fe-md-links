#!/usr/bin/env node

const markdownSearchLinks = require('./Libreria/linksrs'); 
const colors = require('colors');
const request = require('request');
var validation = {
  broken: 0 
};

const validateLinks = (urls) => {
  return new Promise(function(resolve, reject){
    urls.forEach(url => {  
      console.log(url);
      testUrl(url);}, urls);
      if(validation.broken){
        resolve(validation); 
      }else{
        reject(Error('no data recovered'));   
      }
      
  });
  
}

const testUrl =(url)=>{
  request(url , function (error, response,) {

    if(error){
      console.log('Err: '+ error);
      return false;
    }

  if(response.statusCode == 200 || response.statusCode == 201 || response.statusCode == 202){
    console.log(`Ruta de la URL
    status:${colors.green(response.statusCode)} 
    link:${colors.yellow (url.substring(0,50))}  `);
    return false;
  }

  if(response.statusCode == 301 || response.statusCode == 302){
    console.log(url + 'responde al status');
    return false;
  }

  if(response.statusCode == 401){
    console.log("se presento un error" + url);
    return false;
  }else{
    console.log(`url tiene un error
    status:${colors.red(response.statusCode)} 
    link:${colors.yellow(url.substring(0,50))} `)
    validation.broken ++ ;
  }

  });
}
module.exports.validateLinks= validateLinks