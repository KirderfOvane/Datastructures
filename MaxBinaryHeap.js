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
  extractMax() {
    //swap root with last index
    let temp = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = temp;
    //remove last index from array (pop), store removed
    const removed = this.heap.pop();
    //sort root value
    //compare with both child nodes,
    let currentIndex = 0;
    let leftChildIndex;
    let rightChildIndex;
    for (let i = 0; i < 10; i++) {
      leftChildIndex = currentIndex * 2 + 1;
      rightChildIndex = currentIndex * 2 + 2;
      //if children is smaller or null/leaf your finished
      let leftChild = this.heap[leftChildIndex];
      let rightChild = this.heap[rightChildIndex];
      //       console.log(leftChild,rightChild,this.heap[currentIndex])
      //if both is larger than root value
      //compare child nodes, largest is swapped with root
      if (leftChild > rightChild) {
        if (!leftChild) break;
        if (leftChild > this.heap[currentIndex]) {
          // swap leftChild and currentindexnode
          temp = this.heap[currentIndex];

          this.heap[currentIndex] = leftChild;
          this.heap[leftChildIndex] = temp;
          //console.log(leftChild,this.heap[currentIndex]);
          // update current node to the swapped
          currentIndex = leftChildIndex;
          //            console.log(currentIndex);
        }
      } else {
        if (!rightChild) break;
        if (rightChild > this.heap[currentIndex]) {
          // swap rightchild and currentindex
          temp = this.heap[currentIndex];
          this.heap[currentIndex] = rightChild;
          this.heap[rightChildIndex] = temp;
          // update current node to the swapped
          currentIndex = rightChildIndex;
        }
      }
      //    console.log(this.heap);
    }
    // when finished return removed
    console.log(removed);
    return;
  }
}
const MyMaxBinaryHeap = new MaxBinaryHeap();
const test4 = MyMaxBinaryHeap.insert(55);
const test3 = MyMaxBinaryHeap.insert(1);
const test2 = MyMaxBinaryHeap.insert(45);
const test = MyMaxBinaryHeap.insert(199);
// console.log(test);
MyMaxBinaryHeap.extractMax();
MyMaxBinaryHeap.extractMax();
MyMaxBinaryHeap.extractMax();
MyMaxBinaryHeap.extractMax();
MyMaxBinaryHeap.extractMax();
MyMaxBinaryHeap.extractMax();
MyMaxBinaryHeap.extractMax();
MyMaxBinaryHeap.extractMax();
