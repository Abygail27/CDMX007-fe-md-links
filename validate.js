#!/usr/bin/env node

const markdownSearchLinks = require('./Libreria/linksrs'); 
const colors = require('colors');
const request = require('request');

var validation = {
  broken: 0 
}; // objeto vacio, var, por que va a variar su respuesta de acuerdo a la validación. 

const validateLinks = (urls) => {
  urls.forEach(url => {  
    console.log(url);
    testUrl(url);}, urls);
    return validation; 
}

const testUrl =(url)=>{
  request(url , function (error, response,) {

    if(error){
      console.log('Err: '+ error);
      return false;
    }

  if(response.statusCode == 200){
    console.log(`Ruta de la URL
    status:${colors.green(response.statusCode)} 
    link:${colors.yellow (url.substring(0,50))}  `);
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