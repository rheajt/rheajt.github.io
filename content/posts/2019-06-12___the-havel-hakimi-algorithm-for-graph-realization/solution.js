function warmup1(arr) {
  return arr.filter(num => num != 0);
}

function warmup2(arr) {
  return arr.sort((a, b) => b - a);
}

function warmup3(num, arr) {
  return num > arr.length;
}

function warmup4(num, arr) {
  for(let i = 0; i < num; i++) {
    arr[i]--;
  }
  return arr;
}

function hh(arr) {
  let step1 = warmup1(arr);
  if(!step1.length) return true;

  let step2 = warmup2(step1);
  let N = step2.shift();

  let step3 = warmup3(N, step2);
  if(step3) return false;

  let step4 = warmup4(N, step2);
  return hh(step4);
}

module.exports = {warmup1, warmup2, warmup3, warmup4, hh};