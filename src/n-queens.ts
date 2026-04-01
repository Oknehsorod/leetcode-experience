function solveNQueens(n: number): string[][] {
  const result: string[][] = [];

  const backtrack = (current: string[][]) => {
    if (current.length > n) return false;
    if (current.length === n) {
      result.push(current.map((el) => el.join('')));
      return true;
    }

    const x = current.length;
    for (let i = 0; i < n; i += 1) {
      if (
        current.some((el, idx) => {
          const delta = x - idx;

          return (
            el[i] === 'Q' || el[i + delta] === 'Q' || el[i - delta] === 'Q'
          );
        })
      )
        continue;

      const newRow = new Array(n).fill('.');
      newRow[i] = 'Q';

      current.push(newRow);

      backtrack(current);

      current.pop();
    }
  };

  backtrack([]);

  return result;
}

solveNQueens(4);
