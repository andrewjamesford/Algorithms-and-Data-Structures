import CodeEditor from "../components/CodeEditor";

import Example from "../examples/LinkedList/Example.js?raw";


function LinkedListPage() {
  return (
    <div>
      <h1 className="text-4xl">Linked List</h1>
      <p className="py-4">
        This data structure is a linear collection of data elements, with each
        element pointing to the next. This data structure is a linear collection
        of data elements, with each element pointing to the next.
      </p>

      <CodeEditor code={Example} />
    </div>
  );
}

export default LinkedListPage;
