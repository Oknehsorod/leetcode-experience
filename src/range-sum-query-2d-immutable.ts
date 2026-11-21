import { runClassMethods } from './utils/runClassMethods.ts';

class NumMatrix {
  private prefixSum: number[][] = [];

  constructor(matrix: number[][]) {
    const n = matrix.length,
      m = matrix[0].length;

    this.prefixSum = Array.from({ length: n }, () => new Array(m).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        const top = i > 0 ? this.prefixSum[i - 1][j] : 0;
        const left = j > 0 ? this.prefixSum[i][j - 1] : 0;
        const topLeft = i > 0 && j > 0 ? this.prefixSum[i - 1][j - 1] : 0;
        this.prefixSum[i][j] = matrix[i][j] + top + left - topLeft;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const total = this.prefixSum[row2][col2];
    const top = row1 > 0 ? this.prefixSum[row1 - 1][col2] : 0;
    const left = col1 > 0 ? this.prefixSum[row2][col1 - 1] : 0;
    const topLeft =
      row1 > 0 && col1 > 0 ? this.prefixSum[row1 - 1][col1 - 1] : 0;

    return total - top - left + topLeft;
  }
}

runClassMethods(
  new NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
  ]),
  ['NumMatrix', 'sumRegion', 'sumRegion', 'sumRegion'],
  [
    [
      [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
      ],
    ],
    [2, 1, 4, 3],
    [1, 1, 2, 2],
    [1, 2, 2, 4],
  ],
);

/*
Time Complexity: constructor - O(m * n), sumRegion - O(1)
Space Complexity: O(m * n)
*/
