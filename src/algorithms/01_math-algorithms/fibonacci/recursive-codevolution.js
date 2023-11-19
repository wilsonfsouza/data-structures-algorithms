// find the fibonacci element

// iterative [O(n)] is far more optimal than the recursive solution
// Big-O -> O(2^n)
function recursiveFibonacci(n) {
  // base case
  if (n < 2) return n

  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(`recursiveFibonacci(0): ${recursiveFibonacci(0)}`)
console.log(`recursiveFibonacci(1): ${recursiveFibonacci(1)}`)
console.log(`recursiveFibonacci(6): ${recursiveFibonacci(6)}`)
console.log(`recursiveFibonacci(7): ${recursiveFibonacci(7)}`)

// 7
// f(6)
// f(5) + f(4) 
// f(4) + f(3) + f(3) + f(2)
// f(3) + f(2) + f(2) + f(1) + f(2) + f(1) + f(1) + f(0)
// f(2) + f(1) + f(1) + f(0) + f(1) + f(0) + 1 + f(1) + f(0) + 1 + 1 + 0
// f(1) + f(0) + 1 + 1 + 0 + 1 + 0 + 1 + 1 + 0 + 1 + 1 + 0
// 1 + 0 + 7
// 8


// f(5)
// f(4) + f(3)
// f(3) + f(2) + f(2) + f(1)
// f(2) + f(1) + f(1) + f(0) + f(1) + f(0) + 1
// f(1) + f(0) + 1 + 1 + 0 + 1 + 0 + 1
// 1 + 0 + 4
// 5

// 8 + 5 = 13