#!/usr/bin/env node
'use strict';


const adjectives = require('./adjectives.json');
const nouns = require('./nouns.json');

module.exports = options => {

    options = options || {};
    let rand = (max) => Math.floor(Math.random() * max - 1) + 1,
        adjective = rand(adjectives.length),
        noun = rand(nouns.length),
        separator = options.separator || '.';

    return `${adjectives[adjective]}${separator}${nouns[noun]}`;
};
