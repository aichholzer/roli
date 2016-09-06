'use strict';


const data = require('./data.json');

module.exports = options => {

    options = options || {};
    let rand = max => Math.floor(Math.random() * max - 1) + 1,
        a = rand(data.adjectives.length),
        n = rand(data.nouns.length),
        s = options.separator || '.';

    return `${data.adjectives[a]}${s}${data.nouns[n]}`;
};
