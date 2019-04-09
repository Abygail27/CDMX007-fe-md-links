
const markdownPath = require('./core');
const getUrls = require("get-urls");
 
const markdownSearchLinks = (data) => {

  let res = getUrls(data);
  console.log(res);

};
module.exports.markdownSearchLinks = markdownSearchLinks;

