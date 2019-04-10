const fs = require('fs');
const core = require('./Libreria/core'); 

const finddir = () => {
  const fs = require('fs');
  
  const readdirc = fs.readdir('./', (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log(files);
    }
  });
  return readdirc;

}
finddir()

module.exports.finddir = finddir;

