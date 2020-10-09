class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let n = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      n = n.next;
      if (!n.next.next) {
        const removeNode = n.next;
        n.next = null;
        this.tail = n;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return removeNode.val;
      }
    }
  }
  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0 || this.length < 0) {
      this.tail = null;
      this.length = 0;
    }
    return oldHead.val;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }
  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const pre = this.get(index - 1);
    const newNode = new Node(val);
    const temp = pre.next;
    pre.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index >= this.length || index < 0) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const pre = this.get(index - 1);
    const node = pre.next;
    pre.next = node.next;
    this.length--;
    return node.val;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

var list = new SinglyLinkedList();
list.push('A');
list.push('B');
list.push('C');
list.push('D');
list.reverse();
const test = list.toArray();
console.log(test);
