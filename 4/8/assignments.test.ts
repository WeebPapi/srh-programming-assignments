// placeOrder.test.ts
import { test } from "node:test"
import { strict as assert } from "node:assert"
import { placeOrder, inventory, bookFlight } from "./main.js"

test("placeOrder function tests", async (t) => {
  t.beforeEach(() => {
    inventory[0].stock = 10
    inventory[1].stock = 5
    inventory[2].stock = 0
  })

  await t.test("should return success when sufficient stock", () => {
    placeOrder("apple", 3, (status) => {
      assert.equal(status, "success")
    })
    assert.equal(inventory[0].stock, 7)
  })

  await t.test("should return fail when insufficient stock", () => {
    placeOrder("banana", 7, (status) => {
      assert.equal(status, "fail")
    })
    assert.equal(inventory[1].stock, 5)
  })

  await t.test("should return fail when item is out of stock", () => {
    placeOrder("orange", 1, (status) => {
      assert.equal(status, "fail")
    })
    assert.equal(inventory[2].stock, 0)
  })

  await t.test("should handle exact stock amount", () => {
    placeOrder("banana", 5, (status) => {
      assert.equal(status, "success")
    })
    assert.equal(inventory[1].stock, 0)
  })

  await t.test("should handle multiple successful orders", () => {
    placeOrder("apple", 2, (status) => {
      assert.equal(status, "success")
    })
    assert.equal(inventory[0].stock, 8)

    placeOrder("apple", 3, (status) => {
      assert.equal(status, "success")
    })
    assert.equal(inventory[0].stock, 5)
  })
})
test("bookFlight function tests", async (t) => {
  await t.test("should successfully book an existing flight", async () => {
    const result = await bookFlight("Tbilisi", "Berlin")
    assert.equal(result, "Flight from Tbilisi to Berlin successfully booked!")
  })

  await t.test("should throw error for non-existent flight", async () => {
    try {
      await bookFlight("Tokyo", "London")
      assert.fail("Expected error was not thrown")
    } catch (error) {
      assert.equal(error.message, "No flights found")
    }
  })

  await t.test("should find exact match only", async () => {
    try {
      await bookFlight("Tbilisi", "Athens")
      assert.fail("Expected error was not thrown")
    } catch (error) {
      assert.equal(error.message, "No flights found")
    }
  })

  await t.test("should be case sensitive", async () => {
    try {
      await bookFlight("tbilisi", "Berlin")
      assert.fail("Expected error was not thrown")
    } catch (error) {
      assert.equal(error.message, "No flights found")
    }
  })

  await t.test(
    "should handle multiple available flights from same departure",
    async () => {
      const result = await bookFlight("Tbilisi", "London")
      assert.equal(result, "Flight from Tbilisi to London successfully booked!")
    }
  )
})
