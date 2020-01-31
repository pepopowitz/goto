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
      ['palette', 'https://github.com/artsy/palette'],
      ['palette pulls', 'https://github.com/artsy/palette/pulls'],
      ['mp', 'https://github.com/artsy/metaphysics'],
      ['mp pulls', 'https://github.com/artsy/metaphysics/pulls'],
      ['github', 'https://github.com'],
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
