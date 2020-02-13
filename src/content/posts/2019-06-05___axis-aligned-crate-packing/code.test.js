const fit1 = require('./code');

describe('Axis-aligned crate packing', () => {
  it('fits boxes', () => {
    expect(fit1(25, 18, 6, 5)).toEqual(12);
    expect(fit1(10, 10, 1, 1)).toEqual(100);
    expect(fit1(12, 34, 5, 6)).toEqual(10);
    expect(fit1(12345, 678910, 1112, 1314)).toEqual(5676);
    expect(fit1(5, 100, 6, 1)).toEqual(0);
  });
});
