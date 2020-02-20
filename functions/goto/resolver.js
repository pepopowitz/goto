const { urlMap } = require('./urlMap.js');
const { translationMap } = require('./translationMap.js');

exports.resolver = function(query) {
  const splits = query
    .split(' ')
    .map(translate)
    .map(x => x.toLowerCase());

  return findMatch(splits, urlMap);
};

function findMatch(args, map) {
  const [first, ...rest] = args;

  const match = map[first];
  return processMatch(match, rest);
}

function processMatch(match, remainingArgs) {
  if (!match) {
    return;
  }

  if (typeof match === 'string') {
    return match;
  }

  if (!remainingArgs || remainingArgs.length === 0) {
    return match[''];
  }

  if (match[remainingArgs[0]]) {
    return findMatch(remainingArgs, match);
  }

  if (remainingArgs.length === 1 && match['*'] !== undefined) {
    return match['*'].replace('{0}', remainingArgs[0]);
  }

  if (remainingArgs.length === 2 && match['**'] !== undefined) {
    return match['**']
      .replace('{0}', remainingArgs[0])
      .replace('{1}', remainingArgs[1]);
  }
}

function translate(value) {
  return translationMap[value.toUpperCase()] || value;
}
