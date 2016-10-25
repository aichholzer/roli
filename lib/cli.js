#!/usr/bin/env node
'use strict';


const roli = require('./index');
const argv = require('minimist')(process.argv.slice(2));
const options = {
    words: argv.words,
    separator: argv.separator
};

console.log(roli(options));
