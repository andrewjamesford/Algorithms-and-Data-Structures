import CodeEditor from "../components/CodeEditor";

import Example from "../examples/MergeSort/Example.js?raw";


function MergeSort() {
  return (
    <div>
      <h1 className="text-4xl">Merge Sort</h1>
      <p className="py-4">
        The algorithm works by dividing the input array into two halves,
        recursively sorting each half, and then merging the two sorted halves
        into a single sorted array.
      </p>

      <CodeEditor code={Example} />
    </div>
  );
}

export default MergeSort;
