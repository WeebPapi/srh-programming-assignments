import { addItem } from "./func/addItem"
import { calculatePrice } from "./func/calculatePrice"
import { getItems } from "./func/getItems"
import { removeItem } from "./func/removeItem"
import { list } from "./list"

let listSize = list.length

let listElement: HTMLUListElement | null =
  document.querySelector(".product-list")
let addBtn = document.querySelector(".add-btn")
let remBtn = document.querySelector(".rem-btn")
let addProdName: HTMLInputElement | null =
  document.querySelector(".addNameInput")
let addProdPrice: HTMLInputElement | null =
  document.querySelector(".addPriceInput")
let remProdName: HTMLInputElement | null =
  document.querySelector(".remNameInput")
let totalElement = document.querySelector(".total")
let searchInput: HTMLInputElement | null =
  document.querySelector(".searchInput")
let searchedListElement = document.querySelector(".searched-items")
let searchBtn = document.querySelector(".search-btn")
if (listElement && list) {
  list.forEach((item) => {
    let newHTML =
      listElement.innerHTML +
      `
      <li>
        <div class="product-card">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        </div>
      </li>
      `
    listElement.innerHTML = newHTML
  })
}
addBtn?.addEventListener("click", () => {
  addItem(addProdName?.value as string, addProdPrice?.value as string)
  if (list.length !== listSize && listElement && totalElement) {
    let newHTML = ""
    list.forEach((item) => {
      newHTML += `
        <li>
          <div class="product-card">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
          </div>
        </li>
        `
    })
    listElement.innerHTML = newHTML
    totalElement.innerHTML = `Total: $${calculatePrice()}`
  }
})
remBtn?.addEventListener("click", () => {
  removeItem(remProdName?.value as string)
  if (list.length !== listSize && listElement && totalElement) {
    let newHTML = ""
    list.forEach((item) => {
      newHTML += `
        <li>
          <div class="product-card">
          <h3>${item.name}</h3>
          <p>Price: $${item.price}</p>
          </div>
        </li>
        `
    })
    listElement.innerHTML = newHTML
    totalElement.innerHTML = `Total: $${calculatePrice()}`
  }
})

searchBtn?.addEventListener("click", () => {
  if (searchBtn && searchInput && searchedListElement) {
    let newHTML = ""
    console.log(searchInput.value)
    getItems(searchInput.value as string).forEach((item) => {
      newHTML += `
          <li>
            <div class="product-card">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            </div>
          </li>
          `
    })
    searchedListElement.innerHTML = newHTML
  }
})
