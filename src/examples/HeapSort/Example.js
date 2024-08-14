
export default function () {

    const heapSort = (arr) => {
        buildMaxHeap(arr);
        for (let i = arr.length - 1; i > 0; i--) {
            swap(arr, 0, i);
            heapify(arr, 0, i);
        }
        return arr;
    };

    const buildMaxHeap = (arr) => {
        const mid = Math.floor(arr.length / 2);
        for (let i = mid; i >= 0; i--) {
            heapify(arr, i, arr.length);
        }
    };

    const heapify = (arr, i, n) => {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let max = i;
        if (left < n && arr[left] > arr[max]) {
            max = left;
        }
        if (right < n && arr[right] > arr[max]) {
            max = right;
        }
        if (max !== i) {
            swap(arr, i, max);
            heapify(arr, max, n);
        }
    };

    const swap = (arr, i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    let myArray = [3, 7, 2, 5, 1, 4, 6, 8];
    return heapSort(myArray); // Output: [1,2,3,4,5,6,7,8]

}