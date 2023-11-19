// Big-O = O(1)

// Binary representation
// A binary, a number that is power of two ends with 0, except 1
// 1 -> 1
// 2 -> 10
// 4 -> 100
// 8 -> 1000
// and so on.

// & = bitwise operator

// n=1 => 0001 | n-1=0 => 0000 ==> 0 - 0000
// n=2 => 0010 | n-1=1 => 0001 ==> 0 - 0000
// n=4 => 0100 | n-1=3 => 0011 ==> 0 - 0000
// n=8 => 1000 | n-1=7 => 0111 ==> 0 - 0000
// n=16 => 10000 | n-1=15 => 01111 ==> 0 - 0000

// Binary is base two - every new digit introduced with the rest being zeros represents a number which is a power of two; 
// and every previous number is the largest possible number that can be expressed with one less digit (i.e. all digits are 1). 
// So, the bitwise "and"  cancels them out

// When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1; otherwise, it's 0
function isPowerOfTwoBitWise(number) {
  if (number < 1) return false

  return (number & (number - 1)) === 0
}

console.log(`isPowerOfTwoBitWise(-2): ${isPowerOfTwoBitWise(-2)}`)
console.log(`isPowerOfTwoBitWise(0): ${isPowerOfTwoBitWise(0)}`)
console.log(`isPowerOfTwoBitWise(1): ${isPowerOfTwoBitWise(1)}`)
console.log(`isPowerOfTwoBitWise(2): ${isPowerOfTwoBitWise(2)}`)
console.log(`isPowerOfTwoBitWise(4): ${isPowerOfTwoBitWise(4)}`)
console.log(`isPowerOfTwoBitWise(5): ${isPowerOfTwoBitWise(5)}`)
console.log(`isPowerOfTwoBitWise(10): ${isPowerOfTwoBitWise(10)}`)
console.log(`isPowerOfTwoBitWise(12): ${isPowerOfTwoBitWise(12)}`)
console.log(`isPowerOfTwoBitWise(100): ${isPowerOfTwoBitWise(100)}`)