function getNext(n: number): number {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.trunc(n / 10);
  }

  return sum;
}

function isHappy(n: number): boolean {
  let fast = n,
    slow = n;

  while (fast !== 1) {
    fast = getNext(getNext(fast));
    slow = getNext(slow);

    // debugger;

    if (fast === slow && fast !== 1) return false;
  }

  return true;
}

console.log(isHappy(19));
console.log(isHappy(2));
