class MaxBinaryHeap {
  constructor() {
    this.heap = [55, 41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let idx = this.heap.length - 1; // index for inserted value
    const value = this.heap[idx]; // inserted value
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2); // get the parent node index
      let parent = this.heap[parentIdx]; // get parent value
      if (value <= parent) break; // if value
      this.heap[parentIdx] = value; // swap value as parent
      this.heap[idx] = parent; // swap parent as value
      idx = parentIdx; // update idx one step up in hierarchy,to parent node idx.
    }
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
    return this.heap;
  }
  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }
}
const MyMaxBinaryHeap = new MaxBinaryHeap();
let test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
test = MyMaxBinaryHeap.extractMax();
console.log(test);
