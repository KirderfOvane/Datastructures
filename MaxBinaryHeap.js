class MaxBinaryHeap {
  constructor() {
    this.heap = [41, 39, 33, 18, 27, 12];
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
}
const MyMaxBinaryHeap = new MaxBinaryHeap();
const test4 = MyMaxBinaryHeap.insert(55);
const test3 = MyMaxBinaryHeap.insert(1);
const test2 = MyMaxBinaryHeap.insert(45);
const test = MyMaxBinaryHeap.insert(199);
console.log(test);
