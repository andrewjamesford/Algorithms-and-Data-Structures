export default function () {
	// Binary Search
	const binarySearch = (arr, x) => {
		let start = 0;
		let end = arr.length - 1;
		while (start <= end) {
			const mid = Math.floor((start + end) / 2);
			if (arr[mid] === x) {
				return mid;
			}
			if (arr[mid] < x) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return -1;
	};

	const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
	const target = 5;

	return binarySearch(myArray, target); // Output: 4
}
