class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  queue(val) {
    // A->B->C->D
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    // A->B->C
    let removed;
    if (this.size === 0) return null;
    if (this.size === 1) {
      removed = this.tail;
      this.tail = null;
      this.head = null;
    } else {
      removed = this.head;
      this.head = this.head.next;
    }
    this.size--;
    return removed;
  }
}

const newQueue = new Queue();
console.log(newQueue.queue('A'));
console.log(newQueue.queue('B'));
console.log(newQueue.queue('C'));
