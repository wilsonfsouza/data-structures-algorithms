/**
 * 
 * @param {Array<Number>} elements 
 * @param {Number} targetElement 
 */

// Big-O -> O(n)
function linearSearch(elements, targetElement) {
  const TARGET_ELEMENT_NOT_IN_ARRAY = -1
  const numberOfElements = elements.length

  for (let elementIndex = 0; elementIndex < numberOfElements; elementIndex++) {
    const element = elements[elementIndex]

    if (element === targetElement) {
      return elementIndex
    }
  }

  return TARGET_ELEMENT_NOT_IN_ARRAY
}

const array = [-5,2,10,4,6]

console.log(`linearSearch(${array},10): ${linearSearch(array, 10)}`)
console.log(`linearSearch(${array},6): ${linearSearch(array, 6)}`)
console.log(`linearSearch(${array},20): ${linearSearch(array, 20)}`)