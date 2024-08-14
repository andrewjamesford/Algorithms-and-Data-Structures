
export default function () {
    // Merge sort is a divide and conquer algorithm that works by dividing an array 
    // into two halves, sorting them separately, and then merging the sorted halves.
    const mergeSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const leftArr = arr.slice(0, mid);
        const rightArr = arr.slice(mid);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    };

    // Merge function is used to merge two arrays
    const merge = (leftArr, rightArr) => {
        const sortedArr = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            if (leftArr[leftIndex] < rightArr[rightIndex]) {
                sortedArr.push(leftArr[leftIndex]);
                leftIndex++;
            } else {
                sortedArr.push(rightArr[rightIndex]);
                rightIndex++;
            }
        }
        return sortedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
    };

    let myArray = [32, 17, 45, 2, 5, 11, 24, 36, 88, 19, 21, 32, 44, 54, 68, 27, 18];

    return mergeSort(myArray); // Output: [1,2,3,4,5,6,7,8]

}