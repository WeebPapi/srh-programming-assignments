import { list } from "../list"

export const addItem = (name: string, price: string) => {
  list.push({
    name,
    price: parseFloat(price),
  })
}
