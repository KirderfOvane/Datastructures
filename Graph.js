// Undirected Graph (adjacencyList)
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex][0]);
    }
    delete this.adjacencyList[vertex];
  }
}
const myGraph = new Graph();
myGraph.addVertex('Tokyo');
myGraph.addVertex('Dallas');
myGraph.addVertex('Aspen');
myGraph.addVertex('Los_Angeles');
myGraph.addVertex('Hong_Kong');

myGraph.addEdge('Tokyo', 'Hong_Kong');
myGraph.addEdge('Dallas', 'Aspen');
myGraph.addEdge('Dallas', 'Tokyo');
myGraph.addEdge('Dallas', 'Hong_Kong');
myGraph.addEdge('Los_Angeles', 'Hong_Kong');
myGraph.addEdge('Los_Angeles', 'Dallas');

myGraph.removeVertex('Hong_Kong');
console.log(myGraph);
