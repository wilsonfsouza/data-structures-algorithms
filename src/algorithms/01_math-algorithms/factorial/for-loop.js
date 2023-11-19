function factorial(n) {
  let productOfIntegers = 1

  for (let integer = 2; integer <= n; integer++) {
    productOfIntegers *= integer
  }

  return productOfIntegers
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))

// Time Complexity -> O(n)