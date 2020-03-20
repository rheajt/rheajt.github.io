function leaps(year1, year2) {
  let count = 0;
  for (let i = year1; i < year2; i++) {
    const rule1 = i % 4 ? false : true;
    const rule2 = i % 100 ? false : true;
    const rule3 = i % 900 === 200 || i % 900 === 600 ? true : false;

    if (rule1) {
      if (rule2) {
        if (rule3) {
          count++;
          continue;
        }
        continue;
      }
      count++;
    }
  }
  return count;
}

module.exports = leaps;
