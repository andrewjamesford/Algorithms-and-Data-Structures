


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
        let output = '';

        // Traverse the list and concatenate the data
        while (current) {
            output += current.data + ' -> ';
            current = current.next;
        }

        // Add null to the end
        output += 'null';

        // Log the output
        console.log(output);
    }
}

// Create a linked list with some nodes
let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(9);
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

// Print the list
list.printList(); // 1 -> 2 -> 3 -> null

console.log('Size=', list.size());
console.log('Last=', list.getLast());
console.log('First=', list.getFirst());
console.log('Clear=', list.clear(), list.printList());

console.log(listExample);
