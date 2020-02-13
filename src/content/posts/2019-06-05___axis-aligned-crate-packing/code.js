function fit1(X, Y, x, y) {
  const sideX = Math.floor(X / x);
  const sideY = Math.floor(Y / y);

  return sideX * sideY;
}

module.exports = fit1;
