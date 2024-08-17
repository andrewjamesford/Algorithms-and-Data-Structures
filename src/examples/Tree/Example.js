export default function () {
	class Node {
		constructor(value) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
	}

	class BinaryTree {
		constructor() {
			this.root = null;
		}

		insert(value) {
			const newNode = new Node(value);
			if (this.root === null) {
				this.root = newNode;
			} else {
				this.insertNode(this.root, newNode);
			}
		}

		insertNode(node, newNode) {
			if (newNode.value < node.value) {
				if (node.left === null) {
					node.left = newNode;
				} else {
					this.insertNode(node.left, newNode);
				}
			} else {
				if (node.right === null) {
					node.right = newNode;
				} else {
					this.insertNode(node.right, newNode);
				}
			}
		}

		toHTML(node = this.root) {
			if (node === null) {
				return "";
			}
			return `
			<div style="display: flex; flex-direction: column; align-items: center;">
        <span>${node.value}</span>
        <div style="display: flex;">
            <div style="margin-right: 10px;">${this.toHTML(node.left)}</div>
            <div style="margin-left: 10px;">${this.toHTML(node.right)}</div>
        </div>
    </div>
		`;
		}
	}

	// Example usage:
	const tree = new BinaryTree();
	tree.insert(10);
	tree.insert(5);
	tree.insert(15);
	tree.insert(3);
	tree.insert(7);
	tree.insert(12);
	tree.insert(18);

	return tree.toHTML();
}
