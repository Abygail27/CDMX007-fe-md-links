#!/usr/bin/env node

const index = require('./index');
const links = require('./linksrs');
const infoRequired = process.argv.splice(2);
const validate = infoRequired.includes('--validate');
const stats = infoRequired.includes('--stats');

