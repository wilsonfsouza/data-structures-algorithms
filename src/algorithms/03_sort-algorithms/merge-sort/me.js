// Big-O -> n*logn
/**
 * 
 * @param {Number[]} array 
 * @param {Number[]} _tempArray 
 */
function mergeSort(array, _tempArray = []) { // Big-O -> log n (divide in half)
  // Base Case
  if (array.length < 2) {
    return array
  }

  // Find the middle
  const middleElementIndex = Math.floor(array.length / 2)

  // Divide the array into 2 parts
  const _tempLeftArray = array.slice(0, middleElementIndex)
  const _tempRightArray = array.slice(middleElementIndex, array.length)
  
  return merge(mergeSort(_tempLeftArray), mergeSort(_tempRightArray))
}
/**
 * 
 * @param {Number[]} leftArray 
 * @param {Number[]} rightArray 
 */
function merge(leftArray, rightArray) { // Big-O -> n (while loop)
  const sortedArray = []
  while(!!leftArray.length && !!rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift())
    } else {
      sortedArray.push(rightArray.shift())
    }
  }
  // Merge the sorted array with the remainting of elements
  return [...sortedArray, ...leftArray, ...rightArray]
}

const array = [-6, 20, 8, -2, 4]

mergeSort(array)

console.log(array) // [-6, -2, 4, 8, 20]

// Check if subarray length is 1 -> base case for recursion
// No? Find the middle element of the sub array and divide into 2
// Yes? go to next
// After all arrays have length 1
// Create a temp array
// Compare first element of subarrays
// merge them into a temp array
// return the temp array

// [-6, 20] || [8, -2, 4]
// [-6] [20] || [8] [-2, 4]
// [-6] [20] || [8] || [-2] [4]

// [-2] [4] => []