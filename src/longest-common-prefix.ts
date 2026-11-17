function longestCommonPrefix(strs: string[]): string {
  let result = '';

  let i = 0;

  while (true) {
    let char = '';
    debugger;
    for (const str of strs) {
      if (str[i] === undefined) return result;
      if (char !== '' && char !== str[i]) {
        return result;
      }
      char = str[i];
    }
    result += char;
    i += 1;
  }
}

/*
Time Complexity: O(N x M)
Space Complexity: O(M)
*/

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['']));
