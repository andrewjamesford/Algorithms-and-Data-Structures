import CodeEditor from "../components/CodeEditor";

import Example from "../examples/Queues/Example.js?raw";


function Queues() {
  return (
    <div>
      <h1 className="text-4xl">Queues</h1>
      <p className="py-4">
        A queue follows the First In First Out (FIFO) principle
      </p>

      <CodeEditor code={Example} />
    </div>
  );
}

export default Queues;
