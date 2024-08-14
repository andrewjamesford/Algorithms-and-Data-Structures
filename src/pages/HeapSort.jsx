import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/HeapSort/Example.js?raw";
import index from "../examples/HeapSort/index.js?raw";
import { sandPackOptions } from "../config/settings";

function HeapSort() {
  return (
    <div>
      <h1 className="text-4xl">Heap Sort</h1>
      <p className="py-4">
        Heap sort is a comparison-based sorting algorithm that works by dividing
        an array into a sorted and an unsorted region, and iteratively shrinking
        the unsorted region by extracting the largest element and moving that to
        the sorted region. The algorithm uses a binary heap data structure to
        represent the heap. In a binary heap, each parent node is greater than
        or equal to its children nodes.
      </p>
      <p className="py-4">
        The algorithm starts by building a max heap from the input array. Once
        the max heap is built, the largest element is at the root of the heap.
        The algorithm then swaps the root element with the last element of the
        heap and removes the last element from the heap. This process is
        repeated until the entire array is sorted.
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

export default HeapSort;
