// Big-O -> n^2 (nested loop) if arrays have the same length 
// n*m if arrays have different length
/**
 * 
 * @param {Number[]} setA 
 * @param {Number[]} setB 
 */
function getCartesianProductAxB(setA, setB) {
  const cartesianProduct = []

  for (let indexSetA = 0; indexSetA < setA.length; indexSetA++) {
    for (let indexSetB = 0; indexSetB < setB.length; indexSetB++) {
      const elementOfA = setA[indexSetA]
      const elementOfB = setB[indexSetB]
      cartesianProduct.push([elementOfA, elementOfB])
    }
  }

  return cartesianProduct
}

const setA = [1,2]
const setB = [3,4]

// AxB getCatesianProductAxB(setA, setB) -> [[1,3],[1,4],[2,3],[2,4]]
console.log(getCartesianProductAxB(setA, setB))