#!/usr/bin/env node

const min = require('minimist');
const { spawn } = require('child_process');
const roli = require('./index');

const argv = min(process.argv.slice(2));
const said = roli({
  words: argv.words,
  separator: argv.separator,
  case: argv.case
});

let copied;
if (process.platform === 'darwin') {
  const { stdin } = spawn('pbcopy');
  stdin.write(said);
  stdin.end();
  copied = '\n   (Copied to clipboard)';
}

console.log(`\n ✔ ${said} ${copied}`);
