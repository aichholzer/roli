const data = require('./data.json');

module.exports = (options = {}) => {
  const words = parseInt(options.words, 10) || 2;
  const rand = (max) => Math.floor(Math.random() * max - 1) + 1;
  const result = [data.adjectives[rand(data.adjectives.length)]];

  for (let w = 0; w < words - 1; w += 1) {
    result.push(data.nouns[rand(data.nouns.length)]);
  }

  const said = result.join(options.separator || '.');
  const low = options.case === 'lower';
  const up = options.case === 'upper';
  return low ? said.toLowerCase() : up ? said.toUpperCase() : said;
};
