function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  const backtrack = (start: number, current: number[]) => {
    if (current.length === k) {
      result.push([...current]);
      return true;
    }

    for (let i = start; i <= n; i += 1) {
      current.push(i);
      backtrack(i + 1, current);
      current.pop();
    }
  };

  backtrack(1, []);

  return result;
}

combine(4, 2);
