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

  DFiterative(vertex) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    const S = [];
    let vert;
    S.push(vertex);
    visited[vertex] = true;
    while (S.length) {
      vert = S.pop();
      result.push(vert);
      adjacencyList[vert].forEach((N) => {
        if (!visited[N]) {
          visited[N] = true;
          S.push(N);
        }
      });
    }
    return result;
  }

  DFtraversal(vertex) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;
    (function traverse(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return traverse(neighbor);
        }
      });
    })(vertex);
    return result;
  }
  BFS(vertex) {
    const visited = {};
    const result = [];
    const Queue = [vertex];
    let vert;
    visited[vertex] = true;
    while (Queue.length) {
      vert = Queue.shift();
      result.push(vert);
      this.adjacencyList[vert].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          Queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
const myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addVertex('F');

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('B', 'D');
myGraph.addEdge('C', 'E');
myGraph.addEdge('D', 'E');
myGraph.addEdge('D', 'F');
myGraph.addEdge('E', 'F');
// const test = myGraph.DFtraversal('A');
// const test = myGraph.DFiterative('A');
const test = myGraph.BFS('A');
console.log(test);
//console.log(myGraph);
