const leaps = require('./solution');

describe('leap years', () => {
  it('should find the leap years', () => {
    expect(leaps(2016, 2017)).toEqual(1);
    expect(leaps(2019, 2020)).toEqual(0);
    expect(leaps(1900, 1901)).toEqual(0);
    expect(leaps(2000, 2001)).toEqual(1);
    expect(leaps(2800, 2801)).toEqual(0);
    expect(leaps(123456, 123456)).toEqual(0);
    expect(leaps(1234, 5678)).toEqual(1077);
    expect(leaps(123456, 7891011)).toEqual(1881475);
  });
});
