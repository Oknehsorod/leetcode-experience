function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  const backtrack = (start: number, current: number[], remaining: number) => {
    if (remaining === 0) {
      result.push([...current]);
      return true;
    }

    for (let i = start; i < candidates.length; i += 1) {
      const value = candidates[i];

      if (value > target) break;
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      if (remaining - value < 0) continue;

      current.push(value);

      backtrack(i + 1, current, remaining - value);

      current.pop();
    }

    return false;
  };

  candidates.sort((a, b) => a - b);
  backtrack(0, [], target);

  return result;
}

//combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
combinationSum2(
  [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  30,
);
