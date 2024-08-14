import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/MergeSort/Example.js?raw";
import index from "../examples/MergeSort/index.js?raw";
import { sandPackOptions } from "../config/settings";

function MergeSort() {
  return (
    <div>
      <h1 className="text-4xl">Merge Sort</h1>
      <p className="py-4">
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
        options={sandPackOptions}
        showNavigation={true}
      />
    </div>
  );
}

export default MergeSort;
