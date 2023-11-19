/**
 * 
 * @param {Array<Number>} elements 
 * @param {Number} targetElement 
 * @param {{start: Number, end: Number, numberOfElements: Number} | undefined} bounds 
 */

// Big-O -> O(logn)
function binarySearch(elements, targetElement, bounds) {
  const TARGET_ELEMENT_NOT_IN_ARRAY = -1

  const hasBounds = !!bounds

  const numberOfElements = hasBounds ? bounds.numberOfElements : elements.length

  const firstElementIndex = hasBounds ? bounds.start : 0
  const firstElement = elements[firstElementIndex]
  const isFirstElement = firstElement === targetElement

  if (isFirstElement) return firstElementIndex
  if (!hasBounds && targetElement < firstElement) {
    return TARGET_ELEMENT_NOT_IN_ARRAY
  }

  const lastElementIndex = hasBounds ? bounds.end : numberOfElements - 1
  const lastElement = elements[lastElementIndex]
  const isLastElement = lastElement === targetElement

  if (isLastElement) return lastElementIndex
  if (!hasBounds && targetElement > lastElement) {
    return TARGET_ELEMENT_NOT_IN_ARRAY
  }

  // get element in the middle and check if it matches or if it's smaller or larger
  const middleElementIndex = hasBounds ? Math.floor((bounds.numberOfElements / 2)) + bounds.start : Math.floor(numberOfElements / 2)
  
  const middleElement = elements[middleElementIndex]
  const isMiddleElement = middleElement === targetElement
  if (isMiddleElement) return middleElementIndex
  
  const isTargetElementSmallerThanMiddle = targetElement < middleElement
  const isTargetElementLargerThanMiddle = targetElement > middleElement

  if (isTargetElementSmallerThanMiddle) {
    return binarySearch(elements, targetElement, {
      start: firstElementIndex,
      end: middleElementIndex,
      numberOfElements: middleElementIndex - firstElementIndex + 1
    })
  } else if (isTargetElementLargerThanMiddle) {
    return binarySearch(elements, targetElement, {
      start: middleElementIndex,
      end: lastElementIndex,
      numberOfElements: lastElementIndex - middleElementIndex + 1
    })
  }
}

const array = [-5,2,4,6,10]
const array2 = [-5,0,1,2,3,4,6,10]

console.log(`binarySearch([${array}],10): Index ${binarySearch(array, 10)}`)
console.log(`binarySearch([${array}],6): Index ${binarySearch(array, 6)}`)
console.log(`binarySearch([${array}],20): Index ${binarySearch(array, 20)}`)
console.log(`binarySearch([${array2}],2): Index ${binarySearch(array2, 2)}`)
console.log(`binarySearch([${array2}],4): Index ${binarySearch(array2, 4)}`)