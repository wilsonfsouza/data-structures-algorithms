/**
 * 
 * @param {Array<Number>} array 
 */

//Big-O -> O(n^2)
function bubbleSort(array) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        let temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
}

const array = [-6, 20, 8, -2, 4]
bubbleSort(array)
console.log(array)

