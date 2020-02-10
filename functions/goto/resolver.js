const { gitHubResolver } = require('./gitHubResolver.js');

exports.resolver = function(query) {
  const gitHubUrl = gitHubResolver(query);
  if (gitHubUrl) {
    return gitHubUrl;
  }

  const map = {
    staging: 'https://staging.artsy.net',
    prod: 'https://artsy.net',
    mail: 'https://mail.google.com',
    calendar: 'https://calendar.google.com',
    backlog:
      'https://artsyproduct.atlassian.net/secure/RapidBoard.jspa?rapidView=86&projectKey=CNMT&view=planning&issueLimit=100',
    sprint:
      'https://artsyproduct.atlassian.net/secure/RapidBoard.jspa?rapidView=86&projectKey=CNMT',
  };
  return map[query];
};
