function countBits(n: number): number[] {
  const result = Array.from({ length: n + 1 }, () => 0);

  for (let i = 0; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
}

/*

i & 1 = 1 for even i and 0 for uneven
i >> 1 = 100 -> 10

*/

console.log(countBits(2));
console.log(countBits(5));
