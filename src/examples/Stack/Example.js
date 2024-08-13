export default function () {
    // Define a stack class
    class Stack {
        constructor() {
            this.items = []; // The array that stores the stack elements
        }

        // Add an element to the top of the stack
        push(element) {
            this.items.push(element);
        }

        // Remove and return the top element of the stack
        pop() {
            // Check if the stack is empty
            if (this.isEmpty()) {
                throw new Error('Stack is empty');
            }
            return this.items.pop();
        }

        // Return the top element of the stack without removing it
        peek() {
            // Check if the stack is empty
            if (this.isEmpty()) {
                throw new Error('Stack is empty');
            }
            return this.items[this.items.length - 1];
        }

        // Check if the stack is empty
        isEmpty() {
            return this.items.length === 0;
        }

        // Return the size of the stack
        size() {
            return this.items.length;
        }

        // Print the stack
        print() {
            return this.items.toString();
        }
    }

    // Create a stack and test its methods
    let myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.print(); // 1,2,3
    console.log(myStack.peek()); // 3
    console.log(myStack.pop()); // 3
    console.log(myStack.size()); // 2

    return myStack.print(); // 1,2

}