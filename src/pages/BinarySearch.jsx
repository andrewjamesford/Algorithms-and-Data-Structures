import CodeEditor from "../components/CodeEditor";

import Example from "../examples/BinarySearch/Example.js?raw";

function DepthFirstSearch() {
	return (
		<>
			<h1 className="text-4xl">Binary Search</h1>
			<p className="py-4">
				A searching algorithm is a step-by-step procedure used to locate
				specific data among a collection of data. It is considered a fundamental
				procedure in computing. In computer science, when searching for data,
				the difference between a fast application and a slower one often lies in
				the use of the proper search algorithm.
			</p>

			<CodeEditor code={Example} />
		</>
	);
}

export default DepthFirstSearch;
