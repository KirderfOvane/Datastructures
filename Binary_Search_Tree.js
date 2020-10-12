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
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
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
  BFS() {
    //       10
    //    7     110
    //  5      13
    //       11   16
    //              17
    let node = this.root;
    const queue = [];
    const data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(7);
BST.insert(110);
BST.insert(5);
BST.insert(13);
BST.insert(16);
BST.insert(11);
BST.insert(17);
const test = BST.BFS();
//const test = BST.find(16);
console.log(test);
