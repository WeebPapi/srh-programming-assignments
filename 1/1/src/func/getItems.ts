import { list } from "../list"

export const getItems = (name: string) => {
  console.log(list.filter((item) => item.name.includes(name)))
  return list.filter((item) => item.name.includes(name))
}
