function getSum(a: number, b: number): number {
  while (b !== 0) {
    const carry = (a & b) << 1;

    a = a ^ b;

    b = carry;
  }

  return a;
}

/*

(a & b) << 1 - collect every 1 and move it to the left. 10 & 10 << 1 = 100 = 2 & 2 << 1 = 4
a ^ b - sum two numbers without digit carry

a = 01
b = 10

carry = (01 & 10) << 1 = 00 << 1 = 000

a = 01 ^ 10 = 11
b = 000

---------

a = 10
b = 11

carry = (10 & 11) << 1 = 10 << 1 = 100

a = 10 ^ 11 = 01
b = 100

carry = (001 & 100) << 1 = 000 << 1 = 0000

a = 001 ^ 100 = 101 = 5
b = 0


*/

getSum(1, 2);
// console.log(getSum(2, 3));
