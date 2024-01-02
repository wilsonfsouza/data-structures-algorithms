// Big-O -> O(n) - linear
/**
 * 
 * @param {number} steps 
 */
function climbingStaircase(steps) {
  const noOfWays = [1,2]

  for (let i = 2; i <= steps; i++) {
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
  }

  return noOfWays[steps-1] // steps starts at 1, array index starts at 0
}

console.log(climbingStaircase(1)) // 1 -> base case
console.log(climbingStaircase(2)) // 2 -> base case
console.log(climbingStaircase(3)) // 3 - (1,1,1),(1,2),(2,1)
console.log(climbingStaircase(4)) // 5 - (1,1,1,1,1),(1,1,2),(1,2,1),(2,1,1),(2,2)
