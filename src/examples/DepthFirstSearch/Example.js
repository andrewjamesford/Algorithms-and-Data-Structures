export default function () {
	// Define a class for the graph
	class Graph {
		constructor() {
			this.nodes = new Map();
		}

		addNode(node) {
			this.nodes.set(node, []);
		}

		addEdge(node1, node2) {
			this.nodes.get(node1).push(node2);
			this.nodes.get(node2).push(node1);
		}
		// Depth First Search
		dfs(start) {
			const visited = new Set();
			const stack = [start];
			visited.add(start);

			while (stack.length > 0) {
				const current = stack.pop();
				console.log(current);

				const neighbors = this.nodes.get(current);
				for (let i = 0; i < neighbors.length; i++) {
					const neighbor = neighbors[i];
					if (!visited.has(neighbor)) {
						visited.add(neighbor);
						stack.push(neighbor);
					}
				}
				return stack;
			}
		}
	}

	function graphToHTML(graph, node) {
		let verticesHTML = "";
		let edgesHTML = "";

		const vertexPositions = new Map();
		let index = 0;

		graph.nodes.forEach((_, vertex) => {
			const x = 100 + 150 * (index % 3);
			const y = 100 + 150 * Math.floor(index / 3);
			vertexPositions.set(vertex, { x, y });
			verticesHTML += `<div style="position: absolute; left: ${x}px; top: ${y}px;">${vertex}</div>`;
			index++;
		});

		for (const [vertex, edges] of graph.nodes) {
			const { x: x1, y: y1 } = vertexPositions.get(vertex);
			for (const edge of edges) {
				const { x: x2, y: y2 } = vertexPositions.get(edge);
				edgesHTML += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black"/>`;
			}
		}

		return `
        <div style="position: relative; width: 500px; height: 400px;">
            <svg style="position: absolute; width: 100%; height: 100%;">
                ${edgesHTML}
            </svg>
            ${verticesHTML}
        </div>
				<div>Branch traversal: ${graph.dfs(node)}</div>
    `;
	}

	const graph = new Graph();
	const nodeA = "A";
	const nodeB = "B";
	const nodeC = "C";
	const nodeD = "D";
	const nodeE = "E";

	graph.addNode(nodeA);
	graph.addNode(nodeB);
	graph.addNode(nodeC);
	graph.addNode(nodeD);
	graph.addNode(nodeE);

	graph.addEdge(nodeA, nodeB);
	graph.addEdge(nodeA, nodeC);
	graph.addEdge(nodeB, nodeD);
	graph.addEdge(nodeB, nodeE);

	return graphToHTML(graph, nodeA).toString();
}
