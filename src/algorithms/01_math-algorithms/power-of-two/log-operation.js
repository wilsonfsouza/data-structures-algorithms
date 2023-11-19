// 16 -> log2 16 -> log 16 / log 2 -> log 2^4 / log 2^1 -> 4/1 -> 4

// Floor(4) === Ceil(4) -> Power of 2


// Big-O -> O(1)

function isPowerOfTwoLog(number) {
  if (number < 1) return false

  return Math.ceil(Math.log2(number)) === Math.floor(Math.log2(number))
}

console.log(`isPowerOfTwoLog(-2): ${isPowerOfTwoLog(-2)}`)
console.log(`isPowerOfTwoLog(0): ${isPowerOfTwoLog(0)}`)
console.log(`isPowerOfTwoLog(1): ${isPowerOfTwoLog(1)}`)
console.log(`isPowerOfTwoLog(2): ${isPowerOfTwoLog(2)}`)
console.log(`isPowerOfTwoLog(4): ${isPowerOfTwoLog(4)}`)
console.log(`isPowerOfTwoLog(5): ${isPowerOfTwoLog(5)}`)
console.log(`isPowerOfTwoLog(10): ${isPowerOfTwoLog(10)}`)
console.log(`isPowerOfTwoLog(12): ${isPowerOfTwoLog(12)}`)
console.log(`isPowerOfTwoLog(100): ${isPowerOfTwoLog(100)}`)