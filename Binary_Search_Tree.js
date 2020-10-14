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
    const visited = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  DFS_preOrder() {
    // 10,7,5,110,13,11,16,17
    const visited = [];
    let node = this.root;
    function traverse(node) {
      //action
      visited.push(node.val);
      //recursion variation
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(node);
    return visited;
  }
  DFS_postOrder() {
    // 10,7,5,110,13,11,16,17
    const visited = [];
    let node = this.root;
    function traverse(node) {
      //recursion variation
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      //action
      visited.push(node.val);
    }
    traverse(node);
    return visited;
  }
  DFS_inOrder() {
    // 10,7,5,110,13,11,16,17
    const visited = [];
    let node = this.root;
    function traverse(node) {
      //recursion variation
      if (node.left) traverse(node.left);
      //action
      visited.push(node.val);
      if (node.right) traverse(node.right);
      //action
    }
    traverse(node);
    return visited;
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
const test = BST.DFS_inOrder();
//const test = BST.find(16);
console.log(test);
