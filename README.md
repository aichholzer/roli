# roli
[![Build Status](https://travis-ci.org/aichholzer/roli.svg?branch=master)](https://travis-ci.org/aichholzer/roli)
[![Dependency status](https://gemnasium.com/badges/github.com/aichholzer/roli.svg)](https://gemnasium.com/github.com/aichholzer/roli)
[![Downloads](https://img.shields.io/npm/dt/roli.svg)](https://www.npmjs.com/package/roli)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/roli)

Fantastic names for your projects, groups, users or anything else you want to give a name to.


### Install
```
npm install --save roli
```


### Use
```
let roli = require('roli');

roli();
// 'Precious.Declaration'
```

Use it with options:

```
let roli = require('roli');

roli({
  separator: '_'
});
// Custom separator
// 'Precious_Declaration'
```


### More options
```
{
  "separator": ".",  // Separator. Default: .
  "words": 2,        // Number of words. Default: 2
}
```


### Contribute
```
fork https://github.com/aichholzer/roli/
```

More ideas for **adjectives** and **nouns** (See `./lib/data.json`) are always welcome.


### License

[MIT](https://github.com/aichholzer/roli/blob/master/LICENSE)
