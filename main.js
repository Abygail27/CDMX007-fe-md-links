const fs = require('fs');
const path = require('path');
const searchURL = require('./linksrs');

const markdownPath = () => {


  fs.readdir('./', (err, data) => {
    if (err) {
      console.log('error', err);
    } else {


      data.forEach(element => {
        if (path.extname(element) === ".md") {
          fs.readFile(element, 'utf-8', (err, data) => {
            {
              if (err)
                console.log('ERROR', err);
              else
                searchURL.markdownSearchLinks(data)
            }
          })
        }
      })
    }
  })
}


module.exports = markdownPath;