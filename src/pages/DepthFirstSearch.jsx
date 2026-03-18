import CodeEditor from "../components/CodeEditor";

import Example from "../examples/DepthFirstSearch/Example.js?raw";

function DepthFirstSearch() {
	return (
		<>
			<h1 className="text-4xl">Depth First Search</h1>
			<p className="py-4">
				Depth First Search (DFS) is an algorithm for traversing or searching
				tree or graph data structures. The algorithm starts at the root node and
				explores as far as possible along each branch before backtracking.
			</p>

			<CodeEditor code={Example} />
		</>
	);
}

export default DepthFirstSearch;
