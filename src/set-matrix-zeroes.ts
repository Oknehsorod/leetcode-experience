function setZeroes(matrix: number[][]): void {
  const m = matrix.length,
    n = matrix[0].length;

  let isColZero = false;

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) isColZero = true;
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isColZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  debugger;
}

/*

I _ I
- 0 1
I 1 1
*/

// setZeroes([
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ]);

// setZeroes([
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ]);

setZeroes([
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
]);
