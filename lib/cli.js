#!/usr/bin/env node
'use strict';


let roli = require('./index'),
    argv = require('minimist')(process.argv.slice(2)),
    options = {
        words: argv.words,
        separator: argv.separator
    };

console.log(roli(options));
