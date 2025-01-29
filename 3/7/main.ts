export class TreeNode {
  value: string
  children: TreeNode[] = []
  isChild: boolean

  constructor(value: string, isChild = false) {
    this.value = value
    this.isChild = isChild
  }

  addChild = (value: string) => {
    let child = new TreeNode(value, true)
    this.children.push(child)
    return child
  }

  print(level: number = 0): void {
    console.log("--".repeat(level) + this.value)
    for (const child of this.children) {
      child.print(level + 1)
    }
  }

  search(searchTerm: string): TreeNode[] {
    if (!searchTerm) {
      return []
    }

    const results: TreeNode[] = []

    if (this.value === searchTerm) {
      results.push(this)
    }

    for (const child of this.children) {
      results.push(...child.search(searchTerm))
    }

    return results
  }
}
