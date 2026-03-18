import CodeEditor from "../components/CodeEditor";

import Example from "../examples/Graphs/Example.js?raw";

function Graphs() {
	return (
		<>
			<h1 className="text-4xl">Graphs</h1>
			<p className="py-4">
				A graph is a data structure that consists of a set of vertices (or
				nodes) and a set of edges (or connections) between them.
			</p>

			<CodeEditor code={Example} />
		</>
	);
}

export default Graphs;
