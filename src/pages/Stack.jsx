import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Stack/Example.js?raw";
import index from "../examples/Stack/index.js?raw";
import { sandPackOptions } from "../config/settings";

function Stack() {
  return (
    <div>
      <h1 className="text-4xl">Stack</h1>
      <p className="py-4">
        A stack follows the Last-In-First-Out (LIFO) principle
      </p>

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
