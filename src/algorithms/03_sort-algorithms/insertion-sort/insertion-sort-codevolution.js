/**
 * 
 * @param {Array<Number>} array 
 */
// Big-O -> O(n^2)
function insertionSort(array) {
  for(let index = 1; index < array.length; index++) {
    let numberToBeInserted = array[index]
    let sortedElementIndex = index - 1
    let sortedElement = array[sortedElementIndex]

    while(sortedElementIndex >= 0 && sortedElement > numberToBeInserted) {
      array[sortedElementIndex + 1] = sortedElement
      sortedElementIndex--
    }

    array[sortedElementIndex + 1] = numberToBeInserted
  }
}

const array = [8, 20, -2, 4, -6]

insertionSort(array)
console.log(array) // [-6, -2, 4, 8, 20] - ASC order

// first element is sorted
// Need to traverse the unsorted part of the array
// Unsorted starts from index = 1 to index = array.length - 1
// Need to store the number to be stored in a variable for the iterations
// Number to be inserted needs to be compared with each element of the sorted part (to the left of sorted part)
// Check if sortedElement > numberToBeInserted; otherwise, there is no need to iterate over sorted element index
// In while -> sorted element that meets the conditional is shifted to the right by 1
// Once that's done, at the index where the condition failed (sortedElement < numberToBeInserted), insert numberToBeInserted to the right of sortedElement