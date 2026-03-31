const showSudoku = (board: string[][]) => {
  const result: string[] = [];

  for (let i = 0; i < 9; i += 1) result.push(board[i].join(' '));

  console.log(`\n${'-'.repeat(40)}\n`);
  console.log(result.join('\n'));
  console.log(`\n${'-'.repeat(40)}\n`);
};

const isValid = (board: string[][], row: number, col: number, num: string) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) return false;
  }
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) return false;
    }
  }
  return true;
};

function solveSudoku(board: string[][]): void {
  const backtrack = (): boolean => {
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {
        if (board[i][j] !== '.') continue;

        for (let n = 1; n <= 9; n += 1) {
          if (isValid(board, i, j, n.toString())) {
            board[i][j] = n.toString();
            if (backtrack()) return true;
            board[i][j] = '.';
          }
        }
        return false;
      }
    }
    return true;
  };

  backtrack();
  debugger;
}

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

/*
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
*/
