// 5! = 5 * 4!
// 4! = 4 * 2!
// 3! = 3 * 2 * 1 = 3 * 2!
// n! = n * (n-1)!
// base case -> 0! = 1 and positive integers

// Big-O -> O(n) - as n increases, the number of executions grow in the same pace
function recursiveFactorial(n) {
  // base case
  if (n === 0) return 1

  return n * recursiveFactorial(n-1)
}

console.log(`recursiveFactorial(0): ${recursiveFactorial(0)}`)
console.log(`recursiveFactorial(1): ${recursiveFactorial(1)}`)
console.log(`recursiveFactorial(3): ${recursiveFactorial(3)}`)
console.log(`recursiveFactorial(5): ${recursiveFactorial(5)}`)