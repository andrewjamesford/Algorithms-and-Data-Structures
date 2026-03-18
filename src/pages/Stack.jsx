import CodeEditor from "../components/CodeEditor";

import Example from "../examples/Stack/Example.js?raw";


function Stack() {
  return (
    <div>
      <h1 className="text-4xl">Stack</h1>
      <p className="py-4">
        A stack follows the Last-In-First-Out (LIFO) principle
      </p>

      <CodeEditor code={Example} />
    </div>
  );
}

export default Stack;
