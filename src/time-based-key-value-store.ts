import { runClassMethods } from './utils/runClassMethods.ts';

class TimeMap {
  private readonly map: Map<string, [number, string][]> = new Map();

  set(key: string, value: string, timestamp: number): void {
    const mapValue = this.map.get(key) ?? [];
    mapValue.push([timestamp, value]);
    this.map.set(key, mapValue);
  }

  get(key: string, timestamp: number): string {
    if (!this.map.has(key)) return '';

    const values = this.map.get(key)!;

    let l = 0,
      r = values.length - 1,
      result = '';

    while (l <= r) {
      const m = Math.floor((r + l) / 2);
      const mT = values[m][0];

      if (mT <= timestamp) {
        result = values[m][1];
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    return result;
  }
}

runClassMethods(
  TimeMap,
  ['TimeMap', 'set', 'set', 'get', 'get', 'get', 'get', 'get'],
  [
    [],
    ['love', 'high', 10],
    ['love', 'low', 20],
    ['love', 5],
    ['love', 10],
    ['love', 15],
    ['love', 20],
    ['love', 25],
  ],
  [null, null, null, '', 'high', 'high', 'low', 'low'],
);

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
