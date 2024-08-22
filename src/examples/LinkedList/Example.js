export default function () {
	// Example of a linked list
	const listExample = {
		head: {
			value: 6,
			next: {
				value: 10,
				next: {
					value: 12,
					next: {
						value: 3,
						next: null,
					},
				},
			},
		},
	};

	// Define a node class
	class ListNode {
		constructor(data) {
			this.data = data; // The data stored in the node
			this.next = null; // The pointer to the next node
		}
	}

	// Define a linked list class
	class LinkedList {
		constructor(head = null) {
			this.head = head; // The first node of the list
		}

		// Return the size of the list
		size() {
			let count = 0;
			let node = this.head;
			while (node) {
				count++;
				node = node.next;
			}
			return count;
		}

		// Clear the list
		clear() {
			this.head = null;
		}

		// Get last node
		getLast() {
			let lastNode = this.head;
			if (lastNode) {
				while (lastNode.next) {
					lastNode = lastNode.next;
				}
			}
			return lastNode;
		}

		// Get first node
		getFirst() {
			return this.head;
		}

		// Print the list
		printList() {
			// Start from the head
			let current = this.head;
			let output = "";

			// Traverse the list and concatenate the data
			while (current) {
				output += `${current.data} -> `;
				current = current.next;
			}

			// Add null to the end
			output += "null";

			// Log the output
			return output;
		}
	}

	// Create a linked list with some nodes
	const node1 = new ListNode(1);
	const node2 = new ListNode(2);
	const node3 = new ListNode(3);
	// Connect the nodes
	node1.next = node2;
	node2.next = node3;

	// Create a linked list with the first node
	const list = new LinkedList(node1);

	return list.printList();
}
