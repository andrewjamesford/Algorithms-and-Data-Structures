export default function () {
    // Define a class for the graph
    class Graph {
        // Constructor to initialize the graph
        constructor() {
            // Use a map to store the adjacency list of each vertex
            this.adjList = new Map();
        }

        // Method to add a vertex to the graph
        addVertex(v) {
            // Check if the vertex already exists in the graph
            if (this.adjList.has(v)) {
                // Throw an error
                throw new Error("Vertex already exists in the graph");
            } else {
                // Set the vertex as a key and an empty array as its value
                this.adjList.set(v, []);
            }
        }

        // Method to add an edge between two vertices
        addEdge(v1, v2) {
            // Check if both vertices exist in the graph
            if (this.adjList.has(v1) && this.adjList.has(v2)) {
                // Get the adjacency list of v1 and push v2 to it
                this.adjList.get(v1).push(v2);
                // Get the adjacency list of v2 and push v1 to it
                this.adjList.get(v2).push(v1);
            } else {
                // Throw an error
                throw new Error("One or both vertices do not exist in the graph");
            }
        }

        // Method to print the graph
        printGraph() {
            // Get the keys of the map (the vertices)
            let vertices = this.adjList.keys();
            // Iterate over the vertices
            for (let v of vertices) {
                // Get the adjacency list of the vertex
                let adj = this.adjList.get(v);
                // Print the vertex and its adjacency list
                return v, "->", adj.join(", ");
            }

            return vertices;
        }
    }

    // Create a new graph object
    let g = new Graph();

    // A vertex (also called a node) in a graph is a fundamental part of the graph structure. 
    // It represents an entity or a point in the graph where edges (connections) meet. 
    // In the context of a graph, vertices are used to store data and can be connected to other vertices via edges.
    // For example, in a social network graph, each vertex might represent a person, and each edge might represent a friendship between two people.
    // Add some vertices to the graph 
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addVertex("D");
    g.addVertex("E");
    g.addVertex("F");


    // An edge in a graph is a connection between two vertices. 
    // Add some edges to the graph
    g.addEdge("A", "B");
    g.addEdge("A", "D");
    g.addEdge("A", "E");
    g.addEdge("B", "C");
    g.addEdge("D", "E");
    g.addEdge("E", "F");
    g.addEdge("E", "C");
    g.addEdge("C", "F");

    // Print the graph
    return g.printGraph();
}