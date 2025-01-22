export const binarySearch = (arr: number[], val: number) => {
  arr.sort((a, b) => a - b)
  let guess = -1
  let min = 0
  let max = arr.length - 1
  if (arr.length === 0 || val > arr[arr.length - 1] || val < arr[0]) return -1
  while (arr[guess] !== val) {
    guess = Math.floor(0.5 * (min + max))
    if (arr[guess] > val) {
      max = guess - 1
    } else if (arr[guess] < val) {
      min = guess + 1
    }
  }
  return guess
}
console.log(binarySearch([1, 2, 3, 4, 5], 3))
