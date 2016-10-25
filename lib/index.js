'use strict';


const data = require('./data.json');

module.exports = (options = {}) => {

    const words = parseInt(options.words) || 2;
    const rand = max => Math.floor(Math.random() * max - 1) + 1;
    const result = [
        data.adjectives[rand(data.adjectives.length)]
    ];

    for (let w = 0; w < words - 1; w++) {
        result.push(data.nouns[rand(data.nouns.length)]);
    }

    let roliSaid = result.join(options.separator || '.');
    roliSaid = options.case === 'lower' ?
        roliSaid.toLowerCase() :
            options.case === 'upper' ?
            roliSaid.toUpperCase() :
            roliSaid;

    return roliSaid;
};
