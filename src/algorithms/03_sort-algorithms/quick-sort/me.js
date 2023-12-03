// pivot -> last element -> array.length - 1 -> -6
// Traverse the array from the first to the last - 1
// Place everything that's smaller than the pivot into a "left" array
// Place everything that's greater than the pivot into a "right" array

/**
 * 
 * @param {Array<Number>} array 
 */
function sortByLastNumber(array) {
  const pivotNumberIndex = array.length - 1
  const pivotNumber = array[pivotNumberIndex]
  const smallerNumbers = []
  const largerNumbers = []
  
  for(let index = 0; index < pivotNumberIndex; index++) {
    let iteratedNumber = array[index]

    if (iteratedNumber > pivotNumber) {
      largerNumbers.push(iteratedNumber)
    } else {
      smallerNumbers.push(iteratedNumber)
    }
  }

  const smallerSortedNumbers = smallerNumbers.length > 1 ? sortByLastNumber(smallerNumbers) : smallerNumbers
  const largerSortedNumbers = largerNumbers.length > 1 ? sortByLastNumber(largerNumbers): largerNumbers

  return [...smallerSortedNumbers, pivotNumber, ...largerSortedNumbers]
}
/**
 * 
 * @param {Array<Number>} array 
 */
function quickSort(array) {
  if (array.length < 1) return []

  return sortByLastNumber(array)
}

const array = [-6, 20, 8, -2, 4]
const array2 = [-6, 0, 20, 8, -2, 10, 4]
const array3 = [-6, 0, 20, 8, -10, -2, 10, 4]

const quickSortedArray = quickSort(array)
console.log(quickSortedArray) // [-6, -2, 4, 8, 20] - ASC order