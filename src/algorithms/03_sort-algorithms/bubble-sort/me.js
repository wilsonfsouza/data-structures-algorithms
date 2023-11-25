/**
 * 
 * @param {Array<Number>} array 
 */

function bubbleSort(array) {
  if (array.length < 1) {
    return array
  }

  let leftMarker
  let rightMarker
  let swippedTimes
  let isArraySorted = false


  while (isArraySorted === false) {
    for (let index = 0; index < array.length - 1; index++) {
      leftMarker = array[index]
      rightMarker = array[index + 1]

      if (leftMarker > rightMarker) {
        array[index] = rightMarker
        array[index + 1] = leftMarker
        swippedTimes++
      }
    }

    if (swippedTimes === 0) {
      isArraySorted = true
    } else {
      swippedTimes = 0
    }
  }

  return array
}

const array = [-6, 20, 8, -2, 4]
const array2 = [-6, 20, 8, -2, 4, 1, 0]

console.log(`bubbleSort([${array}]): sorted array - ${bubbleSort(array)}`)
console.log(`bubbleSort([${array2}]): sorted array2 - ${bubbleSort(array2)}`)