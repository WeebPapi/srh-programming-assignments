let series: number[] = [2]
export const generateSeries = (start: number = 2) => {
  let nextInt = start * (start - 1) + 1
  if (nextInt > Number.MAX_VALUE) {
    console.log(series)
    return
  }
  series.push(nextInt)
  generateSeries(nextInt)
}

export const findMember = (n: number) => {
  generateSeries()
  if (n > series.length) {
    console.log(
      "JavaScript only handles the first 11 members of Sylvester's Series"
    )
    return
  }
  console.log(`The ${n}th member of Sylvester's series is ${series[n - 1]}`)
}
