import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/TowerHanoi/Example.js?raw";
import index from "../examples/TowerHanoi/index.js?raw";
import { sandPackOptions, sandPackProps } from "../config/settings";

function Stack() {
	return (
		<div>
			<h1 className="text-4xl">Tower of Hanoi</h1>
			<p className="py-4">
				The objective of the puzzle is to move the entire pile of stones to
				another platform. obeying the following three rules:
			</p>

			<ol className="ist-decimal list-inside pl-4 mb-4">
				<li>1. Only one disc can be moved at a time.</li>
				<li>
					2. A disc can only be moved if it is the uppermost disc on a pile.
				</li>
				<li>3. No disc may be placed on top of a smaller disc.</li>
			</ol>

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

export default Stack;
