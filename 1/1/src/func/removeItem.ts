import { list } from "../list"
export const removeItem = (name: string) => {
  list.splice(0, list.length, ...list.filter((item) => item.name !== name))
  console.log(list)
}
