// n === 2^x 

// Input is reduced by half -> O(log n)
// as n increases, number loop increases but not at the same amount
function isPowerOfTwo(number) {
  if (number < 1) return false
  
  let remaining = number

  while(remaining % 2 === 0) {
    remaining = remaining / 2
  }

  if (remaining === 1) {
    return true
  }

  return false
}

console.log(`isPowerOfTwo(-2): ${isPowerOfTwo(-2)}`)
console.log(`isPowerOfTwo(0): ${isPowerOfTwo(0)}`)
console.log(`isPowerOfTwo(1): ${isPowerOfTwo(1)}`)
console.log(`isPowerOfTwo(2): ${isPowerOfTwo(2)}`)
console.log(`isPowerOfTwo(4): ${isPowerOfTwo(4)}`)
console.log(`isPowerOfTwo(5): ${isPowerOfTwo(5)}`)
console.log(`isPowerOfTwo(10): ${isPowerOfTwo(10)}`)
console.log(`isPowerOfTwo(12): ${isPowerOfTwo(12)}`)
console.log(`isPowerOfTwo(100): ${isPowerOfTwo(100)}`)

// n=1, true, 2^0

// 16 -> 16/2=8 -> 8/2=4 -> 4/2=2 -> 2/2=1
// 12 -> 12/2=6 -> 6/2=3 -> 3 -> not % 2
//Keep dividing the number by 2 unless you hit an odd number