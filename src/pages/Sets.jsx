import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Sets/Example.js?raw";
import index from "../examples/Sets/index.js?raw";
import { sandPackOptions } from "../config/settings";

function Sets() {
  return (
    <div>
      <h1 className="text-4xl">Sets</h1>
      <p className="py-4">
        A set is a data structure that stores unique values of any type, whether
        primitive values or object references. A set can be created and
        manipulated using the built-in Set object in JavaScript. The Set object
        provides methods to add, delete, check, and iterate over the values in
        the set.
      </p>
      <p className="py-4">
        It&apos;s often used to keep track of groups of elements, and to perform
        set operations like union, intersection, and difference.
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

export default Sets;
