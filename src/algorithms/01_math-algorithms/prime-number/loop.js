// 2,3,5,7,11  -> true
// 1, 4 (2*2), 6 (2*3), 8(2*2*2), 9 (3*3), 10 (2*5), 12 (2*3*2), 14 (2*7) -> false

// O(n)
function isPrime(number) {
  if (number < 2) return false
  
  for (let n = 2; n < number; n++) {
    if (number % n === 0) return false
  }

  return true
}

console.log(`isPrime(1): ${isPrime(1)}`)
console.log(`isPrime(5): ${isPrime(5)}`)
console.log(`isPrime(11): ${isPrime(11)}`)
console.log(`isPrime(10): ${isPrime(10)}`)
console.log(`isPrime(12): ${isPrime(12)}`)
console.log(`isPrime(25): ${isPrime(25)}`)
console.log(`isPrime(35): ${isPrime(35)}`)
console.log(`isPrime(53): ${isPrime(53)}`)
console.log(`isPrime(81): ${isPrime(81)}`)
console.log(`isPrime(97): ${isPrime(97)}`)