function addOnes(num) {
  const split = num.toString().split('');

  return +split.map(each => +each + 1).join('');
}

function addOnesBonus(num) {
  console.log(num);
  const digits = [];

  while(num > 0) {
    digits[digits.length] = (num % 10) + 1;
    num = parseInt(num / 10);
  }

  return digits.reduce((a, b, ind) => {
    return b * Math.pow(10, ind) + a;
  }, 0);
}

addOnesBonus(1234);
module.exports = addOnes;
