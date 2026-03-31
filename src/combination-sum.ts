function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  const backtrack = (start: number, current: number[], remaining: number) => {
    if (remaining === 0) {
      result.push([...current]);
      return true;
    }

    for (let i = start; i < candidates.length; i += 1) {
      const val = candidates[i];

      if (remaining - val < 0) continue;

      current.push(val);

      backtrack(i, current, remaining - val);

      current.pop();
    }
  };

  candidates.sort((a, b) => a - b);
  backtrack(0, [], target);

  return result;
}

/*
combinationSum([2, 3, 6, 7], 7);
*/

combinationSum([2, 3, 5], 8);
