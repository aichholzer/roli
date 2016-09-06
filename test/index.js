'use strict';


let roli = require('../lib'),
    should = require('should');

it('Basic string', done => {
    should(roli()).be.a.String();
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