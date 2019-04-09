const markdownSearchLinks = require('./linksrs'); 
const colors = require('colors');
const getUrls = require('get-urls');
const validate = process.argv[2];

// const validateLinks = (markdownSearchLinks) => {

// const array = getUrls(data);
// let res = getUrls(data);
// array.forEach(res => {
//   console.log(res);
//   console.log(this === array , this);
// }, array); --------- esto se encuentra en el modulo de linksrs.js
const fromLinks = module.exports =`${markdownSearchLinks} `;

const validatingURLS = (fromLinks) => {
  if (validate == '--validate') {
  fromLinks.forEach(element => {
    console.log(element);

    fetch(element)
    .then (response => {
      if(response.status === 200){

        console.log(`
        textRes: ${colors.blue(response.status)} 
        status:${colors.green(response.statusText)} 
        link:${colors.yellow (element.green)}  `)

      }else if (response.status === 400){
        console.log(`
        textRes: ${colors.blue(response.status)} 
        status:${colors.red(response.statusText)} 
        link:${colors.orange(element.green)} `)
      }
    })
  });
  }
}

module.exports.validatingURLS= validatingURLS;
