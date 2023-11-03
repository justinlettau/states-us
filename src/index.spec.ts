import states from './index';

describe('states array', () => {
  it('contain all US states', () => {
    expect(states.length).toBe(57);
  });
});
