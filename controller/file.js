const fs = require('fs');

 fs.readdir('./', (err, files) => {
  if (err) console.log('error', err);
 else console.log('los archivos son:', files);
 });

const path = require('path');
var pathObj = path.parse('README.md');
console.log(pathObj);
 