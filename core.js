// the directory

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

module.exports = finddir();
