import { binarySearch } from "./main"
console.log("Starting tests")

function runTests() {
  // Test 1
  console.log("Test 1: Empty array")
  console.assert(binarySearch([], 5) === -1, "Empty array test failed")

  // Test 2
  console.log("Test 2: Target not in array")
  console.assert(
    binarySearch([1, 2, 3, 4], 5) === -1,
    "Target not found test failed"
  )

  // Test 3
  console.log("Test 3: Multiple elements")
  console.assert(
    binarySearch([1, 2, 3, 4, 5], 3) === 2,
    "Multiple elements test failed"
  )

  // Test 4
  console.log("Test 4: Sorted array")
  console.assert(
    binarySearch([5, 2, 8, 1, 9], 8) === 3,
    "Sorted array test failed"
  )

  // Test 5
  console.log("Test 5: Duplicate elements")
  const duplicateResult = binarySearch([1, 2, 2, 2, 3], 2)
  console.assert(
    duplicateResult >= 1 && duplicateResult <= 3,
    "Duplicate elements test failed"
  )

  // Test 6
  console.log("Test 6: Odd number of elements")
  console.assert(
    binarySearch([1, 2, 3, 4, 5], 4) === 3,
    "Odd elements test failed"
  )

  // Test 7
  console.log("Test 7: Even number of elements")
  console.assert(
    binarySearch([1, 2, 3, 4], 2) === 1,
    "Even elements test failed"
  )

  console.log("All tests completed!")
}

runTests()
