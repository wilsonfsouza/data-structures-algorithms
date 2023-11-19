/**
 * 
 * @param {Array<Number>} array 
 * @param {Number} target 
 */

// Big-O -> O(logn) -> every iteration reduces the input size by half
function binarySearch(array, target) {
  if (array.length === 0) return -1
  
  let leftIndex = 0
  let rightIndex = array.length - 1

  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target === array[middleIndex]) {
      return middleIndex
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1
    } else if (target > array[middleIndex]) {
      leftIndex = middleIndex + 1
    }
  }

  return -1
}

const array = [-5,2,4,6,10]
const array2 = [-5,0,1,2,3,4,6,10]

console.log(`binarySearch([${array}],10): Index ${binarySearch(array, 10)}`)
console.log(`binarySearch([${array}],6): Index ${binarySearch(array, 6)}`)
console.log(`binarySearch([${array}],20): Index ${binarySearch(array, 20)}`)
console.log(`binarySearch([${array2}],2): Index ${binarySearch(array2, 2)}`)
console.log(`binarySearch([${array2}],4): Index ${binarySearch(array2, 4)}`)