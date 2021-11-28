---
title: The Havel-Hakimi algorithm for graph realization
author: jordan
tags:
  - Challenges
image: ../../img/code4.jpg
---

[Project originally posted on reddit.com/r/dailyprogrammer](https://www.reddit.com/r/dailyprogrammer/comments/bqy1cf/20190520_challenge_378_easy_the_havelhakimi/)

It was a dark and stormy night. Detective Havel and Detective Hakimi arrived at the scene of the crime.

Other than the detectives, there were 10 people present. They asked the first person, "out of the 9 other people here, how many had you already met before tonight?" The person answered "5". They asked the same question of the second person, who answered "3". And so on. The 10 answers they got from the 10 people were:

    5 3 0 2 6 2 0 7 2 5

The detectives looked at the answers carefully and deduced that there was an inconsistency, and that somebody must be lying. (For the purpose of this challenge, assume that nobody makes mistakes or forgets, and if X has met Y, that means Y has also met X.)

Your challenge for today is, given a sequence of answers to the question "how many of the others had you met before tonight?", apply the Havel-Hakimi algorithm to determine whether or not it's possible that everyone was telling the truth.

## Solution

```javascript
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
  for (let i = 0; i < num; i++) {
    arr[i]--;
  }
  return arr;
}

function hh(arr) {
  let step1 = warmup1(arr);
  if (!step1.length) return true;

  let step2 = warmup2(step1);
  let N = step2.shift();

  let step3 = warmup3(N, step2);
  if (step3) return false;

  let step4 = warmup4(N, step2);
  return hh(step4);
}
```

## Tests

```javascript
describe('the havel hakimi algorithm', () => {
  it('warmup1: eliminating 0', () => {
    expect(warmup1([5, 3, 0, 2, 6, 2, 0, 7, 2, 5])).toEqual([5, 3, 2, 6, 2, 7, 2, 5]);
    expect(warmup1([4, 0, 0, 1, 3])).toEqual([4, 1, 3]);
    expect(warmup1([1, 2, 3])).toEqual([1, 2, 3]);
    expect(warmup1([0, 0, 0])).toEqual([]);
    expect(warmup1([])).toEqual([]);
  });

  it('warmup2: descending sort', () => {
    expect(warmup2([5, 1, 3, 4, 2])).toEqual([5, 4, 3, 2, 1]);
    expect(warmup2([0, 0, 0, 4, 0])).toEqual([4, 0, 0, 0, 0]);
    expect(warmup2([1])).toEqual([1]); // =>
    expect(warmup2([])).toEqual([]); //=>
  });

  it('warmup3: length check', () => {
    expect(warmup3(7, [6, 5, 5, 3, 2, 2, 2])).toEqual(false);
    expect(warmup3(5, [5, 5, 5, 5, 5])).toEqual(false);
    expect(warmup3(5, [5, 5, 5, 5])).toEqual(true);
    expect(warmup3(3, [1, 1])).toEqual(true);
    expect(warmup3(1, [])).toEqual(true);
    expect(warmup3(0, [])).toEqual(false);
  });

  it('warmup4: front elimination', () => {
    expect(warmup4(4, [5, 4, 3, 2, 1])).toEqual([4, 3, 2, 1, 1]);
    expect(warmup4(11, [14, 13, 13, 13, 12, 10, 8, 8, 7, 7, 6, 6, 4, 4, 2])).toEqual([
      13,
      12,
      12,
      12,
      11,
      9,
      7,
      7,
      6,
      6,
      5,
      6,
      4,
      4,
      2,
    ]);
    expect(warmup4(1, [10, 10, 10])).toEqual([9, 10, 10]);
    expect(warmup4(3, [10, 10, 10])).toEqual([9, 9, 9]);
    expect(warmup4(1, [1])).toEqual([0]);
  });

  it('challenge: the havel-hakimi algorithm', () => {
    expect(hh([5, 3, 0, 2, 6, 2, 0, 7, 2, 5])).toEqual(false);
    expect(hh([4, 2, 0, 1, 5, 0])).toEqual(false);
    expect(hh([3, 1, 2, 3, 1, 0])).toEqual(true);
    expect(hh([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16])).toEqual(
      true,
    );
    expect(hh([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12])).toEqual(
      true,
    );
    expect(hh([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3])).toEqual(
      false,
    );
    expect(hh([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1])).toEqual(false);
    expect(hh([2, 2, 0])).toEqual(false);
    expect(hh([3, 2, 1])).toEqual(false);
    expect(hh([1, 1])).toEqual(true);
    expect(hh([1])).toEqual(false);
    expect(hh([])).toEqual(true);
  });
});
```
