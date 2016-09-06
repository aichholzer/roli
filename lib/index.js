'use strict';


const data = require('./data.json');

module.exports = options => {

    options = options || {};
    let words = parseInt(options.words) || 2,
        rand = max => Math.floor(Math.random() * max - 1) + 1,
        result = [
            data.adjectives[rand(data.adjectives.length)]
        ];

    for (let w = 0; w < words - 1; w++) {
        result.push(data.nouns[rand(data.nouns.length)]);
    }

    return result.join(options.separator || '.');
};
