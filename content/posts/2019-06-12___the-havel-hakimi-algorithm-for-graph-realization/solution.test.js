const {warmup1, warmup2, warmup3, warmup4, hh} = require('./solution');

describe('the havel hakimi algorithm', () => {
  it('warmup1: eliminating 0', () => {
    expect(warmup1([5, 3, 0, 2, 6, 2, 0, 7, 2, 5])).toEqual([5, 3, 2, 6, 2, 7, 2, 5]);
    expect(warmup1([4, 0, 0, 1, 3])).toEqual([4, 1, 3]);
    expect(warmup1([1, 2, 3])).toEqual([1, 2, 3]);
    expect(warmup1([0, 0, 0])).toEqual([]);
    expect(warmup1([])).toEqual([]);
  })

  it('warmup2: descending sort', () => {
    expect(warmup2([5, 1, 3, 4, 2])).toEqual([5, 4, 3, 2, 1])
    expect(warmup2([0, 0, 0, 4, 0])).toEqual([4, 0, 0, 0, 0]);
    expect(warmup2([1])).toEqual([1]);// =>
    expect(warmup2([])).toEqual([]);//=>
  })

  it('warmup3: length check', () => {
    expect(warmup3(7, [6, 5, 5, 3, 2, 2, 2]) ).toEqual(false);
    expect(warmup3(5, [5, 5, 5, 5, 5]) ).toEqual(false);
    expect(warmup3(5, [5, 5, 5, 5])).toEqual(true);
    expect(warmup3(3, [1, 1])).toEqual(true);
    expect(warmup3(1, [])).toEqual(true);
    expect(warmup3(0, []) ).toEqual(false);
  })

  it('warmup4: front elimination', () => {
    expect(warmup4(4, [5, 4, 3, 2, 1])).toEqual( [4, 3, 2, 1, 1]);
    expect(warmup4(11, [14, 13, 13, 13, 12, 10, 8, 8, 7, 7, 6, 6, 4, 4, 2])).toEqual( [13, 12, 12, 12, 11, 9, 7, 7, 6, 6, 5, 6, 4, 4, 2]);
    expect(warmup4(1, [10, 10, 10])).toEqual( [9, 10, 10]);
    expect(warmup4(3, [10, 10, 10])).toEqual( [9, 9, 9]);
    expect(warmup4(1, [1])).toEqual( [0]);
  })

  it('challenge: the havel-hakimi algorithm', () => {
    expect(hh([5, 3, 0, 2, 6, 2, 0, 7, 2, 5])).toEqual(false);
    expect(hh([4, 2, 0, 1, 5, 0])).toEqual(false);
    expect(hh([3, 1, 2, 3, 1, 0])).toEqual(true);
    expect(hh([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16])).toEqual(true);
    expect(hh([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12])).toEqual(true);
    expect(hh([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3])).toEqual(false);
    expect(hh([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1])).toEqual(false);
    expect(hh([2, 2, 0])).toEqual(false);
    expect(hh([3, 2, 1])).toEqual(false);
    expect(hh([1, 1])).toEqual(true);
    expect(hh([1])).toEqual(false);
    expect(hh([])).toEqual(true);
  })
})