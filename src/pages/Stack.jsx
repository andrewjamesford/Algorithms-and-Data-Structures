import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Stack/Example.js?raw";
import index from "../examples/Stack/index.js?raw";

function Stack() {
  return (
    <div>
      <h1>Stack Page</h1>
      <p>This is the Stack page.</p>

      <Sandpack
        template="node"
        files={{
          "Example.js": Example,
          "index.js": index,
        }}
        customSetup={{
          entry: index,
        }}
        autoRun={true}
        options={{
          visibleFiles: ["Example.js"],
          activeFile: "Example.js",
        }}
        showNavigation={true}
      />
    </div>
  );
}

export default Stack;
