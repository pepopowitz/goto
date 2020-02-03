const { gitHubResolver } = require('./gitHubResolver.js');

exports.resolver = function(query) {
  const gitHubUrl = gitHubResolver(query);
  if (gitHubUrl) {
    return gitHubUrl;
  }

  const map = {
    artsy: 'https://github.com/artsy',
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
