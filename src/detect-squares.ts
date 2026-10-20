import { runClassMethods } from './utils/runClassMethods.ts';

class DetectSquares {
  private hash: Map<string, number> = new Map();

  add(point: number[]): void {
    this.hash.set(point.join(), (this.hash.get(point.join()) ?? 0) + 1);
  }

  count([x, y]: number[]): number {
    // debugger;

    let result = 0;

    for (const [key, count] of this.hash.entries()) {
      const [x1, y1] = key.split(',').map(Number);

      if (Math.abs(x - x1) === Math.abs(y - y1) && x !== x1) {
        const corner1Key = [x, y1].join();
        const corner2Key = [x1, y].join();

        const count1 = this.hash.get(corner1Key) ?? 0;
        const count2 = this.hash.get(corner2Key) ?? 0;

        result += count * count1 * count2;
      }
    }

    return result;
  }
}

runClassMethods(
  DetectSquares,
  ['DetectSquares', 'add', 'add', 'add', 'count', 'count', 'add', 'count'],
  [
    [],
    [[3, 10]],
    [[11, 2]],
    [[3, 2]],
    [[11, 10]],
    [[14, 8]],
    [[11, 2]],
    [[11, 10]],
  ],
);
