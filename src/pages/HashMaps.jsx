import CodeEditor from "../components/CodeEditor";

import Example from "../examples/HashMaps/Example.js?raw";

function HashMaps() {
	return (
		<div>
			<h1 className="text-4xl">Hash Maps / Tables Page</h1>
			<p className="py-4">
				A hash map is a data structure that maps keys to values using a hash
				function. In JavaScript, the Map object is a built-in implementation of
				a hash map that allows any value (including objects and functions) to be
				used as a key or a value.
			</p>

			<CodeEditor code={Example} />
		</div>
	);
}

export default HashMaps;
