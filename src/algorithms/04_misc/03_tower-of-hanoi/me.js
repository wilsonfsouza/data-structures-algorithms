// Big-O -> approx. O(2^n)
// 1 disk -> runs 1 -> 2^1
// 2 disks -> runs 4 -> 2^2
// 3 disks -> runs 7 -> 2^3 - 1
/**
 * 
 * @param {number} numberOfDisks 
 * @param {string} fromRod 
 * @param {string} toRod 
 * @param {string} usingRod 
 */
function towerOfHanoi(numberOfDisks, fromRod, toRod, usingRod) {
  // Identify base case - Shift the last disk from A to C
  if (numberOfDisks === 1)  {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
    return
  }

  // Recursion
  // Shift n-1 disks from A to B, using C when required
  towerOfHanoi(numberOfDisks - 1, fromRod, usingRod, toRod)
  console.log(`Move disk ${numberOfDisks} from ${fromRod} to ${toRod}`)

  // Shift n-1 disks from B to C, using A when required
  towerOfHanoi(numberOfDisks - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'A', 'C', 'B') // Shift disks from A to C using B
