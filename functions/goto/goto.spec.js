const { interpret } = require('./goto.js');

describe('interpret', () => {
  it('exists', () => {
    expect(typeof interpret).toEqual('function');
  });
});
