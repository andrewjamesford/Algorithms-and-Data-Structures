
export default function () {

    // Quick sort is a divide and conquer algorithm that works by dividing an array 
    // into two halves, sorting them separately, and then merging the sorted halves.    å    
    const quickSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }
        let pivot = arr[0];
        let leftArr = [];
        let rightArr = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    };


    let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
    return quickSort(myArray); // Output: [1,2,3,4,5,6,7,8]

}