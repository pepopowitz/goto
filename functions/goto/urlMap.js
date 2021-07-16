// wildcards: {
//   '': "matches on 'goto wildcards'",
//   '*': "matches on 'goto wildcards unmatched'",
//   '**': "matches on 'goto wildcards unmatched otherArg'",
// }

exports.urlMap = {
  staging: 'https://staging.artsy.net',
  prod: 'https://artsy.net',
  mail: 'https://mail.google.com',
  calendar: 'https://calendar.google.com',
  oncall:
    'https://artsy.app.opsgenie.com/settings/schedule/detail/aa7d47fa-ab67-4c09-b9ca-d43a20efbb04',
  backlog:
    'https://artsyproduct.atlassian.net/secure/RapidBoard.jspa?rapidView=36&view=planning&issueLimit=100',
  sprint:
    'https://artsyproduct.atlassian.net/secure/RapidBoard.jspa?rapidView=36',
  gh: {
    '': 'https://github.com',
    '*': 'https://github.com/artsy/{0}',
    '**': 'https://github.com/artsy/{0}/{1}',
    prs: 'https://github.com/notifications/beta',
    pulls: 'https://github.com/notifications/beta',
    me: {
      '': 'https://github.com/pepopowitz',
      '*': `https://github.com/pepopowitz/{0}`,
      '**': 'https://github.com/pepopowitz/{0}/{1}',
    },
    artsy: {
      '': 'https://github.com/artsy/',
      '*': 'https://github.com/artsy/{0}',
      '**': 'https://github.com/artsy/{0}/{1}',
    },
  },
};
