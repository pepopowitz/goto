const { resolver } = require('./resolver.js');

exports.handler = function(event, context, callback) {
  const query = event.queryStringParameters.query;

  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify(map, null, 2),
  // });

  callback(null, {
    statusCode: 302,
    headers: {
      Location: exports.interpret(query),
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({}),
  });

  // var response = {
  //   statusCode: 302,
  //   headers: {
  //     Location: search(query),
  //   },
  //   body: null,
  // };
  // callback(null, response);
};

exports.interpret = function(query) {
  const customMatch = resolver(query);
  if (customMatch) {
    return customMatch;
  } else {
    return 'https://google.com/search?q=' + encodeURIComponent(query);
  }
};
