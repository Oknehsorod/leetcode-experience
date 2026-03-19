function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix[0].length;
  let l = 0,
    r = matrix.length * n - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2),
      v = matrix[Math.floor(m / n)][m % n];

    if (v < target) {
      l = m + 1;
    } else if (v > target) {
      r = m - 1;
    } else {
      return true;
    }
  }

  return false;
}

searchMatrix([[1]], 2);
