
/**
 * 
 * @param {Array<Number>} array 
 * @param {Number} target 
 * @param {Number} leftIndex 
 * @param {Number} rightIndex 
 */
function search(array, target, leftIndex, rightIndex) {
  const doesNotHaveElementsToIterate = leftIndex > rightIndex

  if (doesNotHaveElementsToIterate) return -1

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

  if (target === array[middleIndex]) {
    return middleIndex
  }

  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1)
  } else if (target > array[middleIndex]) {
    return search(array, target, middleIndex + 1, rightIndex)
  }
}

/**
 * 
 * @param {Array<Number>} array 
 * @param {Number} target 
 */
// Big-O -> O(logn) -> every iteration reduces the input size by half

function recursiveBinarySearch(array, target) {
  let leftIndex = 0
  let rightIndex = array.length - 1

  return search(array, target, leftIndex, rightIndex)
}

const array = [-5,2,4,6,10]
const array2 = [-5,0,1,2,3,4,6,10]

console.log(`recursiveBinarySearch([${array}],10): Index ${recursiveBinarySearch(array, 10)}`)
console.log(`recursiveBinarySearch([${array}],6): Index ${recursiveBinarySearch(array, 6)}`)
console.log(`recursiveBinarySearch([${array}],20): Index ${recursiveBinarySearch(array, 20)}`)
console.log(`recursiveBinarySearch([${array2}],2): Index ${recursiveBinarySearch(array2, 2)}`)
console.log(`recursiveBinarySearch([${array2}],4): Index ${recursiveBinarySearch(array2, 4)}`)