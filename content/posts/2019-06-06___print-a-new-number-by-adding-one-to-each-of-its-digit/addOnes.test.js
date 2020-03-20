//test
function addOnes(num) {
  const split = num.toString().split('');

  return +split.map(each => +each + 1).join('');
}

describe('increment all numbers', () => {
  it('should add one to each digit in a number', () => {
    expect(addOnes(998)).toEqual(10109);
  });
});
