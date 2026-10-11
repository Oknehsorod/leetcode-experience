function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) result = result ^ num;

  return result;
}

/*
x ^ x = 0 and x ^ 0 = x

[2, 2, 1]

0 ^ 2 = 2
2 ^ 2 = 0
0 ^ 1 = 1

*/

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
