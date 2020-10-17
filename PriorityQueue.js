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
    let idx = this.queue.length - 1;
    const node = this.queue[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.queue[parentIdx];

      if (node.priority >= parent.priority) break;
      this.queue[parentIdx] = node;
      this.queue[idx] = parent;
      idx = parentIdx;
    }
  }
  enQueue(val, priority) {
    const newNode = new Node(val, priority);
    this.queue.push(newNode);
    this.bubbleUp();

    return this.queue;
  }

  deQueue() {
    const min = this.queue[0];
    const end = this.queue.pop();

    if (this.queue.length > 0) {
      this.queue[0] = end;
      this.sinkDown();
    }

    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.queue.length;
    const currentNode = this.queue[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.queue[leftChildIdx];
        if (currentNode.priority > leftChild.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];

        if ((swap === null && rightChild.priority < currentNode.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;

      this.queue[idx] = this.queue[swap];
      this.queue[swap] = currentNode;
      idx = swap;
    }
  }
}
