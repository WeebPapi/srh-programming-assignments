export const countdown = (num: number) => {
  if (num === 0) {
    console.log("Done!")
    return
  }

  console.log(num)
  countdown(num - 1)
}
