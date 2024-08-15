import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/HashString/Example.js?raw";
import index from "../examples/HashString/index.js?raw";
import { sandPackOptions } from "../config/settings";

function HashString() {
  return (
    <div>
      <h1 className="text-4xl">Hash String</h1>
      <p className="py-4">
        A hashing algorithm is a mathematical function that takes in data of any
        size and produces a fixed-size output, called a hash. The hash is
        typically a unique representation of the input data, and even small
        changes to the input data will produce a completely different hash.
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

export default HashString;
