function totalNQueens(n: number): number {
  let count = 0;

  const dig1 = new Set<number>();
  const dig2 = new Set<number>();
  const col = new Set<number>();

  const backtrack = (x: number) => {
    if (x === n) {
      count += 1;
      return;
    }

    for (let i = 0; i < n; i += 1) {
      const dig1Val = x - i,
        dig2Val = x + i;

      if (dig1.has(dig1Val) || dig2.has(dig2Val) || col.has(i)) continue;

      dig1.add(dig1Val);
      dig2.add(dig2Val);
      col.add(i);

      backtrack(x + 1);

      dig1.delete(dig1Val);
      dig2.delete(dig2Val);
      col.delete(i);
    }
  };

  backtrack(0);

  return count;
}

totalNQueens(4);
