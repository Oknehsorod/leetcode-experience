import { runClassMethods } from './utils/runClassMethods.ts';

class TrieNode {
  public map = new Map<string, TrieNode>();
  public isEnd: boolean = false;
}

class Trie {
  private root = new TrieNode();

  constructor() {}

  insert(word: string): void {
    let current = this.root;
    for (const char of word) {
      if (!current.map.has(char)) {
        current.map.set(char, new TrieNode());
      }
      current = current.map.get(char)!;
    }
    current.isEnd = true;
  }

  search(word: string): boolean {
    let current = this.root;
    for (const char of word) {
      if (!current.map.has(char)) {
        return false;
      }
      current = current.map.get(char)!;
    }
    return current.isEnd;
  }

  startsWith(prefix: string): boolean {
    let current = this.root;

    for (const char of prefix) {
      if (!current.map.has(char)) return false;
      current = current.map.get(char)!;
    }

    return true;
  }
}

runClassMethods(
  Trie,
  ['Trie', 'insert', 'search', 'search', 'startsWith', 'insert', 'search'],
  [[], ['apple'], ['apple'], ['app'], ['app'], ['app'], ['app']],
);
