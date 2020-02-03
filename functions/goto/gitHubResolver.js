exports.gitHubResolver = function(query) {
  const map = {
    'gh palette': 'https://github.com/artsy/palette',
    'gh palette pulls': 'https://github.com/artsy/palette/pulls',
    'gh reaction': 'https://github.com/artsy/reaction',
    'gh reaction pulls': 'https://github.com/artsy/reaction/pulls',
    'gh force pulls': 'https://github.com/artsy/force/pulls',
    'gh force': 'https://github.com/artsy/force',
    'gh gravity pulls': 'https://github.com/artsy/gravity/pulls',
    'gh gravity': 'https://github.com/artsy/gravity',
    'gh mp pulls': 'https://github.com/artsy/metaphysics/pulls',
    'gh mp': 'https://github.com/artsy/metaphysics',
    'gh kaws pulls': 'https://github.com/artsy/kaws/pulls',
    'gh kaws': 'https://github.com/artsy/kaws',
  };

  return map[query];
};
