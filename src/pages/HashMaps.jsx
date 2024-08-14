import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Graphs/Example.js?raw";
import index from "../examples/Graphs/index.js?raw";
import { sandPackOptions } from "../config/settings";

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

export default HashMaps;
