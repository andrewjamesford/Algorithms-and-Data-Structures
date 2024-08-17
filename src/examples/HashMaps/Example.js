export default function () {
	// Create a new Map object
	const myMap = new Map();

	// Set some key-value pairs
	myMap.set("name", "Alice");
	myMap.set(42, "answer");
	myMap.set(true, "boolean");

	// Get the size of the map
	// return myMap.size; // 3

	// Get the value associated with a key
	// myMap.get('name'); // Alice
	myMap.get(42); // answer
	myMap.get(true); // boolean

	// Check if a key exists in the map
	myMap.has("name"); // true
	myMap.has("age"); // false

	// Delete a key-value pair
	myMap.delete(42);
	myMap.size; // 2
	myMap.get(42); // undefined

	const result = [];
	// Iterate over the map entries
	for (const [key, value] of myMap) {
		result.push(key, value);
	}
	// name Alice
	// true boolean
	return result;
}
