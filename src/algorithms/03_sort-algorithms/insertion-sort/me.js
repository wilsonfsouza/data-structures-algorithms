// assuming the sorting order to ascending
// assume first element of the array is already sorted (-6)
// 2 "subarrays" - 1 is sorted and 1 is unsorted

/**
 * 
 * @param {Array<Number>} array 
 */
function insertionSort(array) {
  // variable to store the number of the unsorted array to be placed within the sorted ones
  let indexOfNumberToBeInserted = 1

  let lastElementOfArray = array.length - 1

  let isSorted = false

  while(isSorted !== true) {
    if (indexOfNumberToBeInserted > lastElementOfArray) {
      isSorted = true
      return
    }

    let numberToBeInserted = array[indexOfNumberToBeInserted]

    // check the number to be inserted against the sorted element
    for (let index = indexOfNumberToBeInserted - 1; (index >= 0) && (index <= indexOfNumberToBeInserted); index--) {
      let sortedElement = array[index]

      // If sorted element > number to be inserted
      // No -> keep number to be inserted to the right
      if (sortedElement < numberToBeInserted) {
        break
      }
      
      if (sortedElement > numberToBeInserted) {
        // Yes -> shift sorted element to the right
        let elementToTheRightOfSortedElement = index + 1
        array[elementToTheRightOfSortedElement] = sortedElement
        array[index] = numberToBeInserted
      }
    }

    indexOfNumberToBeInserted++
  }
}

const array = [-6, 20, 8, -2, 4]

insertionSort(array)
console.log(array)