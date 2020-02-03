exports.gitHubResolver = function(query) {
  const splits = query.split(' ');

  if (splits[0].toUpperCase() !== 'GH') {
    return;
  }

  if (splits.length === 1) {
    return 'https://github.com';
  }

  const translation1 = translate(splits[1]);
  if (splits.length === 2) {
    return `https://github.com/artsy/${translation1}`;
  }

  const translation2 = translate(splits[2]);
  return `https://github.com/artsy/${translation1}/${translation2}`;
};

function translate(value) {
  return (
    { MP: 'metaphysics', MEATPHYSICS: 'metaphysics' }[value.toUpperCase()] ||
    value.toLowerCase()
  );
}
