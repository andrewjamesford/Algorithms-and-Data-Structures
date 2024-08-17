import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/HashMaps/Example.js?raw";
import index from "../examples/HashMaps/index.js?raw";
import { sandPackOptions, sandPackProps } from "../config/settings";

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
		</div>
	);
}

export default HashMaps;
