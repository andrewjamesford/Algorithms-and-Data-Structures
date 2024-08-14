import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/MergeSort/Example.js?raw";
import index from "../examples/MergeSort/index.js?raw";

function MergeSort() {
  return (
    <div>
      <h1>Merge Sort</h1>
      <p>
        The algorithm works by dividing the input array into two halves,
        recursively sorting each half, and then merging the two sorted halves
        into a single sorted array.
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

export default MergeSort;
