import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/LinkedList/Example.js?raw";
import index from "../examples/LinkedList/index.js?raw";

function LinkedListPage() {
  return (
    <div>
      <h1>Linked List</h1>
      <p>
        This data structure is a linear collection of data elements, with each
        element pointing to the next. This data structure is a linear collection
        of data elements, with each element pointing to the next.
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
        options={{
          visibleFiles: ["Example.js"],
          activeFile: "Example.js",
        }}
        showNavigation={true}
      />
    </div>
  );
}

export default LinkedListPage;
