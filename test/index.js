'use strict';


let roli = require('../lib'),
    should = require('should');

it('Basic string', done => {

    should(roli()).be.a.String();
    done();
});

it('3 words', done => {

    let string = roli({
            words: 3
        }),
        words = string.split('.');

    should(string.indexOf('.')).be.above(3);
    should(words.length).equal(3);
    done();
});

it('Default separator', done => {

    should(roli().indexOf('.')).be.above(3);
    done();
});

it('Custom separator', done => {

    should(roli({ separator: '-' }).indexOf('-')).be.above(3);
    done();
});
