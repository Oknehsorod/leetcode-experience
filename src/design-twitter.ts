import { runClassMethods } from './utils/runClassMethods.ts';

class TwitterMaxHeap<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.compare(this.heap[parentIndex], this.heap[index])) break;

      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];

      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    while (true) {
      let smallest = index;
      const leftIndex = 2 * index + 1,
        rightIndex = 2 * index + 2;

      if (
        leftIndex < this.size() &&
        this.compare(this.heap[leftIndex], this.heap[smallest])
      )
        smallest = leftIndex;
      if (
        rightIndex < this.size() &&
        this.compare(this.heap[rightIndex], this.heap[smallest])
      )
        smallest = rightIndex;

      if (smallest === index) break;

      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];

      index = smallest;
    }
  }

  public push(val: T) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  public pop() {
    if (this.size() === 0) return;
    if (this.size() === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;

    this.bubbleDown(0);

    return top;
  }

  public peek() {
    return this.heap[0];
  }

  public size() {
    return this.heap.length;
  }
}

class Twitter {
  private follows = new Map<number, Set<number>>();
  private tweets = new Map<number, [number, number][]>();
  private time = 1;

  constructor() {}

  postTweet(userId: number, tweetId: number): void {
    this.tweets.set(userId, [
      ...(this.tweets.get(userId) ?? []),
      [tweetId, this.time],
    ]);
    this.time += 1;
  }

  getNewsFeed(userId: number): number[] {
    const result: number[] = [];
    const followeeIds = [userId, ...(this.follows.get(userId) ?? [])];
    const heap = new TwitterMaxHeap<[number, number, number, number]>(
      (a, b) => a[1] > b[1],
    );

    for (const followeeId of followeeIds) {
      const tweets = this.tweets.get(followeeId);

      if (tweets && tweets.length > 0) {
        const lastIndex = tweets.length - 1;
        const [tweetId, time] = tweets[lastIndex];
        heap.push([tweetId, time, followeeId, lastIndex]);
      }
    }

    while (heap.size() > 0 && result.length < 10) {
      const [tweetId, time, followeeId, tweetIndex] = heap.pop()!;
      result.push(tweetId);

      if (tweetIndex > 0) {
        const tweets = this.tweets.get(followeeId)!;
        const prevIndex = tweetIndex - 1;
        const [prevTweetId, prevTime] = tweets[prevIndex];
        heap.push([prevTweetId, prevTime, followeeId, prevIndex]);
      }
    }

    return result;
  }

  follow(followerId: number, followeeId: number): void {
    if (followerId === followeeId) return;

    this.follows.set(
      followerId,
      new Set([...(this.follows.get(followerId) ?? []), followeeId]),
    );
  }

  unfollow(followerId: number, followeeId: number): void {
    this.follows.get(followerId)?.delete(followeeId);
  }
}

// runClassMethods(
//   Twitter,
//   [
//     'Twitter',
//     'postTweet',
//     'getNewsFeed',
//     'follow',
//     'postTweet',
//     'getNewsFeed',
//     'unfollow',
//     'getNewsFeed',
//   ],
//   [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]],
// );

runClassMethods(
  Twitter,
  ['Twitter', 'follow', 'getNewsFeed'],
  [[], [1, 5], [1]],
);
