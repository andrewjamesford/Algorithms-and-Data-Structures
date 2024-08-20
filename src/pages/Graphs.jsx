import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Graphs/Example.js?raw";
import index from "../examples/Graphs/index.js?raw";
import { sandPackOptions, sandPackProps } from "../config/settings";

function Graphs() {
	return (
		<>
			<h1 className="text-4xl">Graphs</h1>
			<p className="py-4">
				A graph is a data structure that consists of a set of vertices (or
				nodes) and a set of edges (or connections) between them.
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

export default Graphs;
