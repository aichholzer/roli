'use strict';


const exec = require('child_process').exec;
const roli = require('../lib');
const should = require('should');


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

it('Lower case', done => {

    let string = roli({ case: 'lower' });
    should(string).be.a.String();
    done();
});

it('Upper case', done => {

    let string = roli({ case: 'upper' });
    should(string).be.a.String();
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

it('Lower case', done => {

    exec('./lib/cli.js --case=lower', (error, stdout) => {
        should(stdout).be.a.String();
        done();
    });
});

it('Upper case', done => {

    exec('./lib/cli.js --case=upper', (error, stdout) => {
        should(stdout).be.a.String();
        done();
    });
});
