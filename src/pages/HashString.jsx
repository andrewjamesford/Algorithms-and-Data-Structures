import CodeEditor from "../components/CodeEditor";

import Example from "../examples/HashString/Example.js?raw";


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

      <CodeEditor code={Example} />
    </div>
  );
}

export default HashString;
