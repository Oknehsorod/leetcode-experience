function rotate(matrix: number[][]): void {
  const n = matrix.length;

  // diagonal mirror
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  debugger;

  // horizontal mirror
  for (const row of matrix) {
    row.reverse();
  }

  debugger;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
