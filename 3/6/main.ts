export const bubbleSort = (arr: number[]) => {
  let highest: number
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        highest = arr[i]
        let temp = arr[i + 1]
        arr[i + 1] = highest
        arr[i] = temp
      }
    }
  }
  return arr
}
console.log(bubbleSort([2, 1, 5, 3, 4, 5, 9, 7, 23, 12, 98, 3, 54, 0, 21]))
