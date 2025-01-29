import test from "node:test"
import assert from "node:assert"
import { TreeNode } from "./main"

// Test 1
test("TreeNode Tests", async (t) => {
  await t.test("Init Test", () => {
    const val = "1"
    assert.strictEqual(new TreeNode("1").value, "1")
  })

  await t.test("addChild Test", () => {
    const child = "2"
    const treeNode = new TreeNode("1")
    assert.strictEqual(treeNode.addChild("2").value, "2")
  })

  // Search Tests
  await t.test("search finds exact matches", () => {
    const root = new TreeNode("root")
    const child1 = root.addChild("child1")
    const child2 = root.addChild("child2")

    const results = root.search("child1")
    assert.strictEqual(results.length, 1)
    assert.strictEqual(results[0], child1)
  })

  await t.test("search finds multiple matches", () => {
    const root = new TreeNode("test")
    const child1 = root.addChild("test")
    const child2 = root.addChild("test")

    const results = root.search("test")
    assert.strictEqual(results.length, 3) // root + 2 children
    assert.ok(results.includes(root))
    assert.ok(results.includes(child1))
    assert.ok(results.includes(child2))
  })

  await t.test("search returns empty array for no matches", () => {
    const root = new TreeNode("root")
    root.addChild("child1")
    root.addChild("child2")

    const results = root.search("nonexistent")
    assert.strictEqual(results.length, 0)
  })

  await t.test("search handles empty search term", () => {
    const root = new TreeNode("root")
    root.addChild("child1")
    root.addChild("child2")

    const results = root.search("")
    assert.strictEqual(results.length, 0)
  })
})
