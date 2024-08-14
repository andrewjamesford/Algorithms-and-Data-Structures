
export default function () {
    // Create a new Set object
    let mySet = new Set();

    // Add some values to the set
    mySet.add(1);
    mySet.add("hello");
    mySet.add(true);
    mySet.add({ name: "Alice" });

    // Get the size of the set
    // return mySet.size; // 4

    // Check if a value is in the set
    // return mySet.has(1); // true
    // return mySet.has(2); // false

    // Delete a value from the set
    mySet.delete("hello");
    // return mySet.size; // 3
    // return mySet.has("hello"); // false

    let iteratorValue = "";
    // Iterate over the values in the set
    for (let value of mySet) {
        iteratorValue = iteratorValue + " " + JSON.stringify(value);
    }
    return iteratorValue;
    // 1
    // true
    // {name: "Alice"}

}