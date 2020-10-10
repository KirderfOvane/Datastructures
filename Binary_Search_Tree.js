class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    let current = this.root;
    while (true) {
      if (current === null || current === undefined) return false;
      if (current.val === val) return current;
      if (val > current.val) {
        if (!current.right) return false;
        current = current.right;
      } else {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(7);
BST.insert(1101);
BST.insert(5);
BST.insert(13);
BST.insert(16);
BST.insert(11);
BST.insert(17);

const test = BST.find(16);
console.log(test);
