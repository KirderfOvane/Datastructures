class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  bubbleUp() {
    let idx = this.queue.length - 1; // index for inserted node
    const node = this.queue[idx]; // inserted node noderity
    //console.log(node);
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); // get the parent node index
      let parent = this.queue[parentIdx]; // get parent node
      // console.log(node.priority >= parent.priority);
      if (node.priority >= parent.priority) break; // if node
      this.queue[parentIdx] = node; // swap node as parent
      this.queue[idx] = parent; // swap parent as node
      idx = parentIdx; // update idx one step up in hierarchy,to parent node idx.
    }
  }
  enQueue(val, priority) {
    const newNode = new Node(val, priority);
    this.queue.push(newNode);
    this.bubbleUp();

    console.log(this.queue);
    return this.queue;
  }

  deQueue() {
    const min = this.queue[0];
    const end = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = end;
      this.sinkDown();
    }
    console.log(min);
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.queue.length;
    const element = this.queue[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.queue[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];
        if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.queue[idx] = this.queue[swap];
      this.queue[swap] = element;
      idx = swap;
    }
  }
}
const MyPriorityQueue = new PriorityQueue();
MyPriorityQueue.enQueue(5, 5);
MyPriorityQueue.enQueue(65, 3);
MyPriorityQueue.enQueue(34, 1);
MyPriorityQueue.enQueue(1, 2);
let te4st = MyPriorityQueue.enQueue(13, 2);
MyPriorityQueue.deQueue();
MyPriorityQueue.deQueue();
//console.log(te4st);
