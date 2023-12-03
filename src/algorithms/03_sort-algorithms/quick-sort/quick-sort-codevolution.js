/**
 * 
 * @param {Array<Number>} array 
 */
function quickSort(array) {
  if (array.length < 2) return array
  
  let pivot = array[array.length - 1]
  let left = []
  let right = []

  for(let index = 0; index < array.length - 1; i++) {
    if (array[index] < pivot) {
      left.push(array[index])
    } else {
      right.push(array[index])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = [-6, 20, 8, -2, 4]
const array2 = [-6, 0, 20, 8, -2, 10, 4]
const array3 = [-6, 0, 20, 8, -10, -2, 10, 4]

const quickSortedArray = quickSort(array)
console.log(quickSortedArray) // [-6, -2, 4, 8, 20] - ASC order