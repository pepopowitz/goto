const { interpret } = require('./goto.js');

describe('interpret', () => {
  it('exists', () => {
    expect(typeof interpret).toEqual('function');
  });

  describe('misses', () => {
    it.each([['steeeve'], ['monkey']])('%s', value => {
      const result = interpret(value);

      expect(result).toContain('google.com');
    });
  });

  describe('hits', () => {
    it.each([
      ['gh', 'https://github.com'],
      ['gh prs', 'https://github.com/notifications/beta'],
      ['gh palette', 'https://github.com/artsy/palette'],
      ['gh mp', 'https://github.com/artsy/metaphysics'],
      ['gh meatphysics', 'https://github.com/artsy/metaphysics'],
      ['GH POSITRON', 'https://github.com/artsy/positron'],
      ['gh palette pulls', 'https://github.com/artsy/palette/pulls'],
      ['gh mp pulls', 'https://github.com/artsy/metaphysics/pulls'],
      ['gh me', 'https://github.com/pepopowitz'],
      ['gh me stevenhicks.me', 'https://github.com/pepopowitz/stevenhicks.me'],
      [
        'gh me stevenhicks.me pulls',
        'https://github.com/pepopowitz/stevenhicks.me/pulls',
      ],
      ['gh artsy', 'https://github.com/artsy'],
      ['staging', 'https://staging.artsy.net'],
      ['prod', 'https://artsy.net'],
      ['mail', 'mail.google.com'],
      ['calendar', 'calendar.google.com'],
      ['backlog', 'artsyproduct.atlassian.net'],
      ['sprint', 'artsyproduct.atlassian.net'],
    ])('%s', (value, expected) => {
      const result = interpret(value);

      expect(result).toContain(expected);
    });
  });
});
