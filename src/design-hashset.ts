import { runClassMethods } from './utils/runClassMethods';

class MyHashSet {
  private capacity = 769;
  private buckets: number[][];

  constructor() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  private hash(key: number) {
    return key % this.capacity;
  }

  add(key: number): void {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    if (!bucket.includes(key)) bucket.push(key);
  }

  remove(key: number): void {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];
    const idxToRemove = bucket.indexOf(key);

    if (idxToRemove !== -1) bucket.splice(idxToRemove, 1);
  }

  contains(key: number): boolean {
    const idx = this.hash(key);
    const bucket = this.buckets[idx];

    return bucket.includes(key);
  }
}

/*
Time Complexity: add - O(N / K), remove - O(2 * N / K) = O(N / K), contains - O(N / K), N - number of elements in the set, K - 769
Space Complexity: O(N)
*/

runClassMethods(
  MyHashSet,
  [
    'MyHashSet',
    'add',
    'add',
    'contains',
    'contains',
    'add',
    'contains',
    'remove',
    'contains',
  ],
  [[], [1], [2], [1], [3], [2], [2], [2], [2]],
);
