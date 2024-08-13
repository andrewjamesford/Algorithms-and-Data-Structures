import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

import ExampleLinkedList from "../examples/ExampleLinkedList?raw";
import Test from "../examples/Test?raw";

function LinkedList() {
  return (
    <div>
      <h1>Linked List</h1>
      <p>
        {" "}
        This data structure is a linear collection of data elements, with each
        element pointing to the next. This data structure is a linear collection
        of data elements, with each element pointing to the next.
      </p>

      <SandpackProvider
        template="node"
        options={{
          activeFile: "/ExampleLinkedList.js",
          visibleFiles: [ExampleLinkedList],
          showLineNumbers: true,
          showTabs: true,
        }}
        files={{
          // "ExampleLinkedList.js": ExampleLinkedList,
          "Test.js": ` const result = 4 + 5;

    console.log(result);`,
        }}
      >
        <SandpackLayout>
          <SandpackCodeEditor showRunButton={true} />
          <SandpackConsole showRestartButton={true} showSetupProgress={true} />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}

export default LinkedList;
