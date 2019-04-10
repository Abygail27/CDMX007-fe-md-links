#!/usr/bin/env node
const validate = require('./validate');

const statsOfLink = (validateLinks, testUrl, finddir, markdownPath) => {
    const markdownPath = require('./core');
    console.log(
      `Links totales: ${validateLinks.length} Links exclusivos: ${testUrl.length} 
      archivo donde se encuentra: ${finddir} carpeta donde se encuentra: ${markdownPath}`.stats);
  };
 
 const testUrl =  async (validateLinks, finddir) => {
      let showStats = await validate.urls(validateLinks);
      statsOfLink(linksArray,showStats, finddir)
    };
  
    module.exports.testUrl = testUrl;