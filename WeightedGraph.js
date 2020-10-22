class NaivePriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.queue.push(newNode);
    this.bubbleUp();

    return this.queue;
  }

  dequeue() {
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  dijkstra(start, end) {
    const previous = {};
    const distances = {};
    const queue = new PriorityQueue();
    const list = this.adjacencyList;
    const path = []; // to return at end
    let smallest;

    // build initial state
    for (let v in list) {
      if (v === start) {
        distances[v] = 0;
        queue.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        queue.enqueue(v, Infinity);
      }
      previous[v] = null;
    }
    // cycle begins
    while (queue.queue.length) {
      // fetch smallest value in queue,which is the shortest edge weight left in queue. we get the val of it,not the weight
      smallest = queue.dequeue().val;
      if (smallest === end) {
        //We are done, we have reached the end node and we know its the shortest path because fetching the smallest value from priority queue makes it so.
        //build path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in list[smallest]) {
          // find neighboring node
          let nextNode = list[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          // if candidate is smaller , replace
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating prevois - how we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            queue.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
const WG = new WeightedGraph();
WG.addVertex('A');
WG.addVertex('B');
WG.addVertex('C');
WG.addVertex('D');
WG.addVertex('E');
WG.addVertex('F');
WG.addEdge('A', 'B', 4);
WG.addEdge('A', 'C', 2);
WG.addEdge('B', 'E', 3);
WG.addEdge('C', 'D', 2);
WG.addEdge('C', 'F', 4);
WG.addEdge('D', 'E', 3);
WG.addEdge('D', 'F', 1);
WG.addEdge('E', 'F', 1);

const test = WG.dijkstra('A', 'E');
console.log(test);
