/**
 * 
 * @param {Array<Number>} array 
 */
function insertionSort(array) {
  // assuming the sorting order to ascending
  // assume first element of the array is already sorted (-6)
  // 2 "subarrays" - 1 is sorted and 1 is unsorted
  let isSorted = false
  
  // variable to store the number of the unsorted array to be placed within the sorted ones
  let indexOfNumberToBeInserted = 1
  let numberToBeInserted = array[indexOfNumberToBeInserted]

  // variable to store the marker of each sorted element that is being checked
  let sortedElementIndex = 0
  let sortedElement = array[sortedElementIndex]

  let lastElementOfArray = array.length - 1

  while(isSorted !== true) {
    // check the number to be inserted against the sorted element
    for (let index = indexOfNumberToBeInserted - 1; (index >= 0) && (index < indexOfNumberToBeInserted); index--) {
      // If sorted element > number to be inserted
      // No -> keep number to be inserted to the right
      if (sortedElement < numberToBeInserted) {
        break
      }
      
      // Yes -> shift sorted element to the right
      array[indexOfNumberToBeInserted] = sortedElement
      
      if (sortedElementIndex === 0) {
        array[sortedElementIndex] = numberToBeInserted
        break
      }

      sortedElementIndex--
    }

    indexOfNumberToBeInserted++

    if (indexOfNumberToBeInserted > lastElementOfArray) {
      isSorted = true
    }
  }
}

const array = [-6, 20, 8, -2, 4]

insertionSort(array)
console.log(array)