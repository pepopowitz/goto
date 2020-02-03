exports.gitHubResolver = function(query) {
  const splits = query.split(' ');

  if (splits[0].toUpperCase() !== 'GH') {
    return;
  }

  if (splits.length === 1) {
    return 'https://github.com';
  }

  if (splits[1].toUpperCase() === 'MEE') {
    return resolveMyRepo(splits);
  } else {
    return resolveArtsyRepo(splits);
  }
};

function translate(value) {
  return (
    { MP: 'metaphysics', MEATPHYSICS: 'metaphysics' }[value.toUpperCase()] ||
    value.toLowerCase()
  );
}

function resolveMyRepo(splits) {
  if (splits.length === 2) {
    return 'https://github.com/pepopowitz';
  }

  const translation1 = translate(splits[2]);
  if (splits.length === 3) {
    return `https://github.com/pepopowitz/${translation1}`;
  }

  const translation2 = translate(splits[3]);
  return `https://github.com/pepopowitz/${translation1}/${translation2}`;
}

function resolveArtsyRepo(splits) {
  const translation1 = translate(splits[1]);
  if (splits.length === 2) {
    return `https://github.com/artsy/${translation1}`;
  }

  const translation2 = translate(splits[2]);
  return `https://github.com/artsy/${translation1}/${translation2}`;
}
