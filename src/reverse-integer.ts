function reverse(x: number): number {
  const MAX_32BIT_NUM = Math.pow(2, 31) - 1;

  const modifier = x < 0 ? -1 : 1;
  let positiveX = Math.abs(x);

  let result = 0;

  while (positiveX !== 0) {
    const a = positiveX % 10;
    positiveX = Math.trunc(positiveX / 10);

    result = result * 10 + a;
  }

  if (result > MAX_32BIT_NUM) return 0;

  return result * modifier;
}

// 120 -> 021
// 120 / 100 = 1.2 = 1
// 120 - 1 * 100 = 20
// 20 / 10 = 2
// 20 - 20 = 0

// 123 -> 321
// 123 / 100 = 1.23 = 1
// 123 - 1 * 100 = 23
// 23 / 10 = 2.3 = 2
// 23 - 2 * 10 = 3
// 3 / 1 = 3

console.log(reverse(10));
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
