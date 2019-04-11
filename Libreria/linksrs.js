#!/usr/bin/env node
const markdownPath = require('./core');
const getUrls = require("get-urls");

let urls = new Set();
const markdownSearchLinks = (data) => {
  urls = getUrls(data);
  return urls;
};
module.exports.markdownSearchLinks = markdownSearchLinks;


 