import { list } from "../list"
export const calculatePrice = () => {
  let prices = list.map((item) => item.price)
  return prices.reduce((a, b) => a + b)
}
