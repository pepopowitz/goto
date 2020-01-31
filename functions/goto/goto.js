const map = require('./map.js');

exports.handler = function(event, context, callback) {
  const query = event.queryStringParameters.query;

  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify(map, null, 2),
  // });

  callback(null, {
    statusCode: 302,
    headers: {
      Location: exports.findMap(query),
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

exports.findMap = function(query) {
  const customMatch = map[query];
  if (customMatch) {
    console.log('matched! redirecting to ', customMatch);
    return customMatch;
  } else {
    return 'https://google.com/search?q=' + encodeURIComponent(query);
  }
};
