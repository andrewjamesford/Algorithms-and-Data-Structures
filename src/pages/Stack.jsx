import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Stack/Example.js?raw";
import index from "../examples/Stack/index.js?raw";

function Stack() {
  return (
    <div>
      <h1>Stack</h1>
      <p>A stack follows the Last-In-First-Out (LIFO) principle</p>

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
