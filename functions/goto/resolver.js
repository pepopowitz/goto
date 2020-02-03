exports.resolver = function(query) {
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
    artsy: 'https://github.com/artsy',
    gh: 'https://github.com',
    staging: 'https://staging.artsy.net',
    prod: 'https://artsy.net',
    mail: 'https://mail.google.com',
    calendar: 'https://calendar.google.com',
    backlog:
      'https://artsyproduct.atlassian.net/secure/RapidBoard.jspa?rapidView=4&view=planning.nodetail',
    sprint:
      'https://artsyproduct.atlassian.net/secure/RapidBoard.jspa?rapidView=4&view=detail',
  };
  return map[query];
};
