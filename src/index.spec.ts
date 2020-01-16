import states from '.';

describe('states array', () => {
  it('contain all US states', () => {
    expect(states.length).toBe(59);
  });
});
