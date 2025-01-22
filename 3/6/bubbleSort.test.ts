import { bubbleSort } from "./main"
console.log("Starting Tests")

function runTests() {
  // Test 1
  let emptyArr: number[] = []
  console.log("Test 1: Empty array")
  console.assert(bubbleSort(emptyArr) === emptyArr, "Empty array sort failed")

  // Test 2
  let singleArr: number[] = [1]
  console.log("Test 2: Single Element")
  console.assert(
    bubbleSort(singleArr) === singleArr,
    "Single element sort failed"
  )

  // Test 3
  let numArray: number[] = [2, 1, 4, 3, 5]
  console.log("Test 3: Number Array")
  console.assert(
    bubbleSort(numArray) === numArray.sort((a, b) => a - b),
    "Number array test failed"
  )

  // Test 4
  let negNumArray = [-6, -8, -2, -1, -10]
  console.log("Test 4: Negative number array")
  console.assert(
    bubbleSort(negNumArray) === negNumArray.sort((a, b) => a - b),
    "Negative number array test failed"
  )

  // Test 5
  let dupeArray = [4, 4, 4, 4]
  console.log("Test 5: Duplicate elements")
  console.assert(
    bubbleSort(dupeArray) === dupeArray,
    "Duplicate number array test failed"
  )

  console.log("All tests completed!")
}

runTests()
