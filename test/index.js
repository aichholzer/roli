const { exec } = require('child_process');
const should = require('should');
const roli = require('../lib');

// As a module

it('Basic string', (done) => {
  should(roli()).be.a.String();
  done();
});

it('3 words', (done) => {
  const string = roli({
    words: 3
  });
  const words = string.split('.');

  should(string).be.a.String();
  should(string.indexOf('.')).be.above(3);
  should(words.length).equal(3);
  done();
});

it('Default separator', (done) => {
  const string = roli();
  should(string).be.a.String();
  should(string.indexOf('.')).be.above(3);
  done();
});

it('Custom separator', (done) => {
  const string = roli({ separator: '-' });
  should(string).be.a.String();
  should(string.indexOf('-')).be.above(3);
  done();
});

it('Lower case', (done) => {
  const string = roli({ case: 'lower' });
  should(string).be.a.String();
  done();
});

it('Upper case', (done) => {
  const string = roli({ case: 'upper' });
  should(string).be.a.String();
  done();
});

// As a CLI tool

it('Basic string', (done) => {
  exec('./lib/cli.js', (error, stdout) => {
    should(stdout).be.a.String();
    done();
  });
});

it('3 words', (done) => {
  exec('./lib/cli.js --words=3', (error, stdout) => {
    should(stdout).be.a.String();
    should(stdout.indexOf('.')).be.above(3);
    should(stdout.split('.').length).equal(3);
    done();
  });
});

it('Default separator', (done) => {
  exec('./lib/cli.js --words=3', (error, stdout) => {
    should(stdout).be.a.String();
    should(stdout.indexOf('.')).be.above(3);
    done();
  });
});

it('Custom separator', (done) => {
  exec('./lib/cli.js --separator=-', (error, stdout) => {
    should(stdout).be.a.String();
    should(stdout.indexOf('-')).be.above(3);
    done();
  });
});

it('Lower case', (done) => {
  exec('./lib/cli.js --case=lower', (error, stdout) => {
    should(stdout).be.a.String();
    done();
  });
});

it('Upper case', (done) => {
  exec('./lib/cli.js --case=upper', (error, stdout) => {
    should(stdout).be.a.String();
    done();
  });
});
