'use strict';


let exec = require('child_process').exec,
    roli = require('../lib'),
    should = require('should');


// As a module

it('Basic string', done => {

    should(roli()).be.a.String();
    done();
});

it('3 words', done => {

    let string = roli({
            words: 3
        }),
        words = string.split('.');

    should(string).be.a.String();
    should(string.indexOf('.')).be.above(3);
    should(words.length).equal(3);
    done();
});

it('Default separator', done => {

    let string = roli();
    should(string).be.a.String();
    should(string.indexOf('.')).be.above(3);
    done();
});

it('Custom separator', done => {

    let string = roli({ separator: '-' });
    should(string).be.a.String();
    should(string.indexOf('-')).be.above(3);
    done();
});


// As a CLI tool

it('Basic string', done => {

    exec('./lib/cli.js', (error, stdout) => {
        should(stdout).be.a.String();
        done();
    });
});

it('3 words', done => {

    exec('./lib/cli.js --words=3', (error, stdout) => {
        should(stdout).be.a.String();
        should(stdout.indexOf('.')).be.above(3);
        should(stdout.split('.').length).equal(3);
        done();
    });
});

it('Default separator', done => {

    exec('./lib/cli.js --words=3', (error, stdout) => {
        should(stdout).be.a.String();
        should(stdout.indexOf('.')).be.above(3);
        done();
    });
});

it('Custom separator', done => {

    exec('./lib/cli.js --separator=-', (error, stdout) => {
        should(stdout).be.a.String();
        should(stdout.indexOf('-')).be.above(3);
        done();
    });
});
