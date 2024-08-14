import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/QuickSort/Example.js?raw";
import index from "../examples/QuickSort/index.js?raw";

function QuickSort() {
  return (
    <div>
      <h1>Quick Sort</h1>
      <p>
        This algorithm chooses a pivot item from the collection, partitions the
        collection into two subcollections such that all items less than the
        pivot are in the first subcollection and all items greater than or equal
        to the pivot are in the second subcollection, then recursively sorts
        each subcollection. This algorithm is fast and in-place
      </p>

      <p>
        The quickSort function takes an array as input and returns a sorted
        array using the quick sort algorithm. The algorithm works by selecting a
        pivot element from the array and partitioning the array into two
        subarrays, one containing elements smaller than the pivot, and the other
        containing elements larger than the pivot. The two subarrays are then
        recursively sorted until the entire array is sorted.
      </p>

      <p>
        To test the quick sort algorithm, you can create an array of random
        numbers and pass it to the quickSort() function.
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

export default QuickSort;
