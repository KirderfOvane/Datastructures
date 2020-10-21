class PriorityQueue {
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
    const visited = {};
    const previous = {};
    const distances = {};
    const queue = new PriorityQueue();
    const list = this.adjacencyList;
    let tempWeight;
    let vertex;
    let current;
    let cntDistance;
    queue.enqueue(start, 0);
    distances[start] = 0;
    visited[start] = true;
    while (queue.values.length) {
      console.log(distances);
      vertex = queue.dequeue();
      visited[vertex.val] = true;
      tempWeight = null;
      list[vertex.val].forEach((neighbor) => {
        if (!visited[neighbor.node]) {
          queue.enqueue(neighbor.node, neighbor.weight);
          if (neighbor.weight > tempWeight) {
            previous[neighbor.node] = vertex.val;
            current = neighbor.node;
            cntDistance = 0;
            while (current !== start) {
              //console.log(distances[current]);
              //console.log(current);
              cntDistance = cntDistance + distances[current];
              current = previous[current];
            }

            distances[neighbor.node] = neighbor.weight; // distance back to startvertex from this neighbor
          }
        }
      });
    }
    // console.log(visited);
    // console.log(previous);
    //console.log(distances);
    // console.log(queue);
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
WG.addEdge('C', 'D', 2);
WG.addEdge('C', 'F', 4);
WG.addEdge('D', 'E', 3);
WG.addEdge('B', 'E', 3);
WG.dijkstra('A', 'E');
// console.log(WG.adjacencyList);
