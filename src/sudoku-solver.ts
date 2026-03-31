const showSudokuFromHash = (hash: Map<string, string[]>) => {
  const result: string[] = [];

  for (let i = 0; i < 9; i += 1) result.push(hash.get(`r${i}`)!.join(' '));

  console.log(`\n${'-'.repeat(40)}\n`);
  console.log(result.join('\n'));
  console.log(`\n${'-'.repeat(40)}\n`);
};

function solveSudoku(board: string[][]): void {
  const emptyIdxs: [number, number][] = [];

  const initHash = new Map<string, string[]>();

  board.forEach((row, idx) => {
    if (idx % 3 === 0) {
      for (let i = 0; i < 9; i += 3) {
        initHash.set(`s${idx}-${i}`, [
          ...board[idx].slice(i, i + 3),
          ...board[idx + 1].slice(i, i + 3),
          ...board[idx + 2].slice(i, i + 3),
        ]);
      }
    }
    row.forEach((v, j) => {
      initHash.set(`c${j}`, [...(initHash.get(`c${j}`) ?? []), v]);
      if (v === '.') emptyIdxs.push([idx, j]);
    });
    initHash.set(`r${idx}`, row);
  });

  const backtrack = (e: [number, number][], hash: Map<string, string[]>) => {
    if (e.length === 0) {
      for (let i = 0; i < 9; i += 1) {
        board[i] = hash.get(`r${i}`)!;
      }
      return;
    }
    const shiftedVal = e.shift()!;
    const [x, y] = shiftedVal!;

    const sKey = `s${x - (x % 3)}-${y - (y % 3)}`;
    const rKey = `r${x}`;
    const cKey = `c${y}`;
    const s = hash.get(sKey)!;
    const r = hash.get(rKey)!;
    const c = hash.get(cKey)!;

    const a = new Set([...s, ...r, ...c]);

    for (let i = 1; i <= 9; i += 1) {
      const iStr = i.toString();

      if (a.has(iStr)) continue;

      const newHash = new Map(hash);

      const newS = [...s];
      const newR = [...r];
      const newC = [...c];

      newS[(x % 3) * 3 + (y % 3)] = iStr;
      newR[y] = iStr;
      newC[x] = iStr;

      newHash.set(sKey, newS);
      newHash.set(rKey, newR);
      newHash.set(cKey, newC);

      backtrack([...e], newHash);
    }
  };

  backtrack([...emptyIdxs], initHash);
}

/*
solveSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
*/

solveSudoku([
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '9', '.', '.', '1', '.', '.', '3', '.'],
  ['.', '.', '6', '.', '2', '.', '7', '.', '.'],
  ['.', '.', '.', '3', '.', '4', '.', '.', '.'],
  ['2', '1', '.', '.', '.', '.', '.', '9', '8'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '2', '5', '.', '6', '4', '.', '.'],
  ['.', '8', '.', '.', '.', '.', '.', '1', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
]);
