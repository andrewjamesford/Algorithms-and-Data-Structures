import { Sandpack } from "@codesandbox/sandpack-react";

import Example from "../examples/Tree/Example.js?raw";
import index from "../examples/Tree/index.js?raw";

function Tree() {
  return (
    <div>
      <h1 className="text-4xl">Tree</h1>
      <p className="py-4">
        A data tree is a hierarchical data structure that consists of nodes
        connected by edges. Each node contains a value or key and may have
        references to its child nodes, forming a parent-child relationship. The
        topmost node is called the root, and nodes without any children are
        referred to as leaves. Trees are used to represent various hierarchical
        structures and are fundamental in computer science for tasks such as
        searching, sorting, and organizing data.
      </p>
      <p className="py-4">
        There are several types of trees, each with unique properties and
        applications. For example, a binary tree is a tree where each node has
        at most two children, known as the left and right child. A binary search
        tree (BST) is a type of binary tree that maintains a sorted order, where
        the left child contains values less than the parent node, and the right
        child contains values greater than the parent node. AVL trees and
        Red-Black trees are self-balancing binary search trees that ensure the
        tree remains balanced, providing efficient search, insertion, and
        deletion operations. Other types of trees include B-trees, which are
        used in databases and file systems, and Trie trees, which are used for
        efficient retrieval of strings.
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

export default Tree;
