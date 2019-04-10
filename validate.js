#!/usr/bin/env node
const markdownSearchLinks = require('./linksrs'); 
const colors = require('colors');
var request = require('request');


const validateLinks = (urls) => {
  urls.forEach(url => {  
    console.log(url);
    testUrl(url);
  }, urls);
}

const testUrl =(url)=>{
  request(url , function (error, response,) {

    if(error){
      console.log('Err: '+ error);
      return false;
    }

  if(response.statusCode == 200 || response.statusCode == 201 || response.statusCode == 202){
    console.log(`Ruta de la URL
    status:${colors.red(response.statusCode)} 
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
  }

  });
}
module.exports.validateLinks= validateLinks