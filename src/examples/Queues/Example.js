export default function () {
    // Define a queue class
    class Queue {
        constructor() {
            this.items = []; // The array that stores the queue elements
        }

        // Add an element to the end of the queue
        enqueue(element) {
            this.items.push(element);
        }

        // Remove and return the first element of the queue
        dequeue() {
            // Check if the queue is empty
            if (this.isEmpty()) {
                throw new Error('Queue is empty');
            }
            return this.items.shift();
        }

        // Return the first element of the queue without removing it
        peek() {
            // Check if the queue is empty
            if (this.isEmpty()) {
                throw new Error('Queue is empty');
            }
            return this.items[0];
        }

        // Check if the queue is empty
        isEmpty() {
            return this.items.length === 0;
        }

        // Return the size of the queue
        size() {
            return this.items.length;
        }

        // Print the queue
        print() {
            return this.items.toString();
        }
    }

    // Create a queue and test its methods
    let myQueue = new Queue();
    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    return myQueue.print(); // 1,2,3
    //   return myQueue.peek(); // 1
    //   return myQueue.dequeue(); // 1
    //   return myQueue.size(); // 2
    //   return myQueue.peek(); // 2
    //   return myQueue.print(); // 1,2,3

}