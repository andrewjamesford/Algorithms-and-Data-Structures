import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/DepthFirstSearch/Example.js?raw";
import index from "../examples/DepthFirstSearch/index.js?raw";
import { sandPackOptions, sandPackProps } from "../config/settings";

function DepthFirstSearch() {
	return (
		<>
			<h1 className="text-4xl">Depth First Search</h1>
			<p className="py-4">
				Depth First Search (DFS) is an algorithm for traversing or searching
				tree or graph data structures. The algorithm starts at the root node and
				explores as far as possible along each branch before backtracking.
			</p>

			<Sandpack
				files={{
					"Example.js": Example,
					"index.js": index,
				}}
				customSetup={{ entry: index }}
				options={sandPackOptions}
				template={sandPackProps.template}
				theme={sandPackProps.theme}
				autoRun={sandPackProps.autoRun}
				showNavigation={sandPackProps.showNavigation}
			/>
		</>
	);
}

export default DepthFirstSearch;
