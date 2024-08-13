import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
  useSandpack,
  Sandpack,
} from "@codesandbox/sandpack-react";

import ExampleLinkedList from "../examples/ExampleLinkedList?raw";
import Test from "../examples/Test?raw";
import index from "../examples/index.js?raw";
// import Server from "../examples/Server?raw";

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
      <Sandpack
        template="node"
        files={{
          "Test.js": Test,
          "index.js": index,
        }}
        customSetup={{
          entry: index,
        }}
        autoRun={true}
      />
      {/* <SandpackProvider
        template="node"
        // options={
        //   {
        //     // bundlerURL: "https://sandpack-bundler.codesandbox.io",
        //     // visibleFiles: ["Test.js"],
        //     // activeFile: "Test.js",
        //   }
        // }
        // files={{
        //   // "Server.js": Server,
        //   "Test.js": Test,
        // }}
        autoRun={true}
        customSetup={{
          entry: "../examples/index.js",
        }}
        // files={{
        //   "ExampleLinkedList.js": ExampleLinkedList,
        // }}
        // activeFile="Test.js"
      >
        <SandpackLayout>
          <SandpackCodeEditor showRunButton={true} />
          <SandpackConsole standalone={true} au />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider> */}
    </div>
  );
}

export default LinkedList;
