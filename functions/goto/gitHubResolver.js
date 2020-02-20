exports.gitHubResolver = function(query) {
  const splits = query.split(' ');

  if (splits[0].toUpperCase() !== 'GH') {
    return;
  }

  if (splits.length === 1) {
    return 'https://github.com';
  }

  if (splits.length === 2) {
    const match = map[splits[1].toLowerCase()];
    if (match) {
      return match;
    }
  }

  if (splits[1].toUpperCase() === 'ME') {
    return resolveMyRepo(splits);
  } else {
    return resolveArtsyRepo(splits);
  }
};

const map = {
  prs: 'https://github.com/notifications/beta',
  me: 'https://github.com/pepopowitz',
  artsy: 'https://github.com/artsy',
};

function translate(value) {
  return (
    { MP: 'metaphysics', MEATPHYSICS: 'metaphysics' }[value.toUpperCase()] ||
    value.toLowerCase()
  );
}

function resolveMyRepo(splits) {
  if (splits.length < 3) {
    return;
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
  if (splits.length < 2) {
    return;
  }

  if (splits.length === 2) {
    return `https://github.com/artsy/${translation1}`;
  }

  const translation2 = translate(splits[2]);
  return `https://github.com/artsy/${translation1}/${translation2}`;
}
