const { resolver } = require('./resolver.js');

exports.handler = function(event, context, callback) {
  const query = event.queryStringParameters.query;

  callback(null, {
    statusCode: 302,
    headers: {
      Location: exports.interpret(query),
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({}),
  });
};

exports.interpret = function(query) {
  const customMatch = resolver(query);
  if (customMatch) {
    return customMatch;
  } else {
    return 'https://google.com/search?q=' + encodeURIComponent(query);
  }
};
