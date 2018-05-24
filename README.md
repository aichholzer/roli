# roli

[![Greenkeeper badge](https://badges.greenkeeper.io/aichholzer/roli.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/aichholzer/roli.svg?branch=master)](https://travis-ci.org/aichholzer/roli)
[![Downloads](https://img.shields.io/npm/dt/roli.svg)](https://www.npmjs.com/package/roli)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/roli)

Fantastic names for your projects, groups, users or anything else you want to give a name to.


### Install
```
npm install --save roli
```
If you need to use it globally as a CLI tool:
```
npm install -g roli
```


### Use
```
const roli = require('roli');
const result = roli();

// 'Precious.Declaration'
```

Use it with options:
```
const roli = require('roli');
// Custom separator
const result = roli({
  separator: '_'
});

// 'Precious_Declaration'
```

### More options
```
{
  "case": "upper" || "lower",  // Upper -or lower case the result.
  "separator": ".",  // Separator. Default: .
  "words": 2,        // Number of words. Default: 2
}
```

### CLI use:
```
$> roli --separator=_ --words=3

// 'Precious_Declaration_Subject'
```


### Contribute
```
fork https://github.com/aichholzer/roli/
```

More ideas for **adjectives** and **nouns** (See `./lib/data.json`) are always welcome.


### License

[MIT](https://github.com/aichholzer/roli/blob/master/LICENSE)
