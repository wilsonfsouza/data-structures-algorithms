// Problem Statement
// - Given a number ‘n’, find the first ‘n’ elements of the Fibonacci sequence
// - First elements are 0,1
//   f(n) = f(n-1) + f(n-2)
// base case f(0) = 0, f(1) = 1

function fibonacci(n, fibonacciElements = [0,1]) {
  const numberOfFibonacciElements = fibonacciElements.length

  if (n <= 1) {
    return fibonacciElements
  }

  if (numberOfFibonacciElements < n) {
    const lastPrecedingElement = fibonacciElements[numberOfFibonacciElements - 1]
    const secondLastPrecedingElement = fibonacciElements[numberOfFibonacciElements - 2]
    const sumLastTwoPrecedingElements = lastPrecedingElement + secondLastPrecedingElement
    fibonacciElements.push(sumLastTwoPrecedingElements)
    
    return fibonacci(n,fibonacciElements)
  }

  console.log({n, numberOfFibonacciElements, fibonacciElements})
  return fibonacciElements
}

fibonacci(2)
fibonacci(3)
fibonacci(7)

