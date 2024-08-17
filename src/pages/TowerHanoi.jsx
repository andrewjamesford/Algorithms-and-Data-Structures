import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/TowerHanoi/Example.js?raw";
import index from "../examples/TowerHanoi/index.js?raw";
import { sandPackOptions } from "../config/settings";

function Stack() {
	return (
		<div>
			<h1 className="text-4xl">Tower of Hanoi</h1>
			<p className="py-4">
				The objective of the puzzle is to move the entire pile of stones to
				another platform. obeying the following three rules:
			</p>

			<ol>
				<li>Only one disc can be moved at a time.</li>
				<li>A disc can only be moved if it is the uppermost disc on a pile.</li>
				<li>No disc may be placed on top of a smaller disc.</li>
			</ol>

			<Sandpack
				template="node"
				theme="dark"
				files={{
					"Example.js": Example,
					"index.js": index,
				}}
				customSetup={{
					entry: index,
				}}
				autoRun={true}
				options={sandPackOptions}
				showNavigation={true}
			/>
		</div>
	);
}

export default Stack;
