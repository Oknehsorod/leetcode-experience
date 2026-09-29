function findTargetSumWays(nums: number[], target: number): number {
  let map: Map<number, number> = new Map();
  map.set(0, 1);

  for (const num of nums) {
    const nextMap = new Map();

    [...map.keys()].forEach((sum) => {
      nextMap.set(sum + num, (nextMap.get(sum + num) ?? 0) + map.get(sum));
      nextMap.set(sum - num, (nextMap.get(sum - num) ?? 0) + map.get(sum));
    });

    debugger;

    map = nextMap;
  }

  debugger;

  return map.get(target) ?? 0;
}

/*

1, 1, 1, 1, 1 | 3

{ 0: 1 }

-------

{ -1: 1; 1: 1; }


*/

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
console.log(findTargetSumWays([1], 1));
