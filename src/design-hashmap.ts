import { runClassMethods } from './utils/runClassMethods';

class MyHashMap {
  private buckets: [number, number][][];
  private capacity = 769;

  constructor() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  private hash(key: number) {
    return key % this.capacity;
  }

  put(key: number, value: number): void {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];

    this.remove(key);
    bucket.push([key, value]);
  }

  get(key: number): number {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];

    return bucket.find((el) => el[0] === key)?.[1] ?? -1;
  }

  remove(key: number): void {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];

    const idxToRemove = bucket.findIndex((el) => el[0] === key);

    if (idxToRemove !== -1) bucket.splice(idxToRemove, 1);
  }
}

/*
Time Complexity: add - O(N / K), remove - O(2 * N / K) = O(N / K), get - O(N / K), N - number of elements in the set, K - 769
Space Complexity: O(N)
*/

runClassMethods(
  MyHashMap,
  ['MyHashMap', 'put', 'put', 'get', 'get', 'put', 'get', 'remove', 'get'],
  [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]],
);
