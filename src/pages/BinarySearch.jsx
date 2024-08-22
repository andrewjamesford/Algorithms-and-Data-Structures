import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/BinarySearch/Example.js?raw";
import index from "../examples/BinarySearch/index.js?raw";
import { sandPackOptions, sandPackProps } from "../config/settings";

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
