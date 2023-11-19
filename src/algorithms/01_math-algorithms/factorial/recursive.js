function factorial(n, accumulatedProductOfIntegers = 1) {
  // base cases: 0! and 1! === 1
  // if (n <= 1) return 1 * accumulatedProductOfIntegers
  if (n === 0) return 1

  const productOfIntegers = n * accumulatedProductOfIntegers
  
  const nextFactorialInteger = n - 1 

  if (nextFactorialInteger > 1) {
    return factorial(nextFactorialInteger, productOfIntegers)
  } 

  return productOfIntegers
}


console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))

