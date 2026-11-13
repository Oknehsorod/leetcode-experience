function checkValidString(s: string): boolean {
  let cmin = 0,
    cmax = 0;

  for (const element of s) {
    if (element === '(') {
      cmin++;
      cmax++;
    } else if (element === ')') {
      cmin--;
      cmax--;
    } else if (element === '*') {
      cmin--;
      cmax++;
    }

    cmin = Math.max(0, cmin);

    if (cmax < 0) return false;
  }

  return cmin === 0;
}

console.log(checkValidString('()'));
console.log(checkValidString('(*)'));
console.log(checkValidString('(*))'));
console.log(checkValidString('('));
