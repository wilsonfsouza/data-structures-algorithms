// Pseudocode
// n=8
// 8/2=4 (remainder 0)
// 4/2=2 (remainder 0)
// 2/2=1 (remainder 0)
// If the remainder is not 0 in any step, n is not power of two
// If the remainder is 0 and n comes down to 1 eventually, n is a power of two

// Input is reduced by half -> O(log n)
// as n increases, number loop increases but not at the same amount
function isPowerOfTwo(n) {
  if (n < 1) return false

  while (n > 1) {
    if (n % 2 !== 0) return false

    n = n / 2
  }
  return true
}