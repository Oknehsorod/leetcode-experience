function hammingWeight(n: number): number {
  let weight = 0;

  while (n !== 0) {
    n = n & (n - 1);
    weight += 1;
  }

  return weight;
}

/*
n & (n - 1) - transform right zero to one.
*/

console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
