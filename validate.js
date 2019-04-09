const markdownSearchLinks = require('./linksrs'); 
const colors = require('colors');
const getUrls = require('get-urls');

const validateLinks = (markdownSearchLinks) => {

const array = getUrls(data);
let res = getUrls(data);
array.forEach(res => {
  console.log(res);
  console.log(this === array , this);
}, array);



if (validate == '--validate') {
  markdownSearchLinks.map(res => 
    fetch(res)
    .then(response => {
      if (response.status == 200) {
        console.log(`$res}` + " " + response.status + " " + response.statusText);
      } else if (response.status == 404) {
        console.log(`${res}` + " " + response.status + " " + response.statusText);
      }
    })
    .catch(err => console.log(err)));
try {

} catch (error) {


item.status = '';
item.statusText = 'Este link no existe';
resolve(item);
console.log(item);
}

}
  return (array).then(res => {
  return res;
 })

} 

module.exports.validateLinks= validateLinks;
