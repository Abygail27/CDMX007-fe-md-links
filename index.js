const fs = require('fs');
const pathFoundInDirectory = ('./controller/file.js');
 

fs.readFile('./README.md', (err,data) => { /*utf-8, data enconding*/
    if(err){
        console.log(err);
        }
        console.log(data.toString()); 
        
}); 
const getArrLinks = (route) => new Promise((resolve) => {
    const arrPathFiles = pathFoundInDirectory(route);
    const arrMd = searchFilesMd(arrPathFiles);
    const arrLinks = arrMd.map(elem => getLinks(getContent(elem), elem));
    let newArr = [];
    arrLinks.forEach(element => {
        element.forEach(elem => {
          newArr.push(elem);
        })
    })
    resolve(newArr);
  });
  
 