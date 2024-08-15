import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Queues/Example.js?raw";
import index from "../examples/Queues/index.js?raw";
import { sandPackOptions } from "../config/settings";

function Queues() {
  return (
    <div>
      <h1 className="text-4xl">Queues</h1>
      <p className="py-4">
        A queue follows the First In First Out (FIFO) principle
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

export default Queues;
