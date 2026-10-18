function myPow(x: number, n: number): number {
  if (n === 0) return 1;

  let N = Math.abs(n);
  let result = 1;
  let currentProduct = x;

  while (currentProduct > 0) {
    if (N & 1) {
      result *= currentProduct;
    }

    currentProduct *= currentProduct;

    N >>= 1;
  }

  return n < 0 ? 1 / result : result;
}

console.log(myPow(2, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2, -2));
