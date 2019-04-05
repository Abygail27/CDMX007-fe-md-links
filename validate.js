const markdownSearchLinks = require('./linksrs'); 


const validateLinks = (markdownSearchLinks) => {
  
if(validate == '--validate'){

  markdownSearchLinks.map(element => 
    fetch(element).then(response =>{
      if (res.status >= 200 && res.status < 400) {
        element.status = res.status;
        element.statusText = res.statusText;
        resolve(element);

        console.log(`status: ${colors.blue(response.status)}
                     text:${colors.green(response.statusText)} 
                     link:${element.red}`)

      } else {
        element.status = res.status;
        element.statusText = 'Fail';
        resolve(element);
      }
    })
  .catch(() => {
  element.status = '';
  element.statusText = 'Este link no existe';
  resolve(element);
  console.log(element);

return Promise.all(arrPr).then(res => {
return res;
})
  }))
}
}

module.exports.validateLinks= validateLinks;