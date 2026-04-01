function exist(board: string[][], word: string): boolean {
  const backtrack = (x: number, y: number, wordIdx: number): boolean => {
    if (wordIdx === word.length) return true;

    if (
      x < 0 ||
      y < 0 ||
      x >= board.length ||
      y >= board[0].length ||
      board[x][y] !== word[wordIdx]
    )
      return false;

    const originalValue = board[x][y];

    board[x][y] = '';

    const found =
      backtrack(x, y + 1, wordIdx + 1) ||
      backtrack(x + 1, y, wordIdx + 1) ||
      backtrack(x, y - 1, wordIdx + 1) ||
      backtrack(x - 1, y, wordIdx + 1);

    board[x][y] = originalValue;

    return found;
  };

  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (backtrack(i, j, 0)) return true;
    }
  }

  return false;
}

exist(
  [
    ['a', 'a', 'a'],
    ['A', 'A', 'A'],
    ['a', 'a', 'a'],
  ],
  'aAaaaAaaA',
);
