// describe is a group of tests

describe('Examples', () => {
  // it is a single test
  it('should add numbers', () => {
    expect(1 + 2).toBe(3);
    expect(2 + 2).toBe(4);
  });

  it('should fail', () => {
    expect(1 + 2).toBe(5);
  });
});
