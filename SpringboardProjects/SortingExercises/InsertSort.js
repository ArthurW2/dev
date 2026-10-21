

function insertionSort(arr) {
    //start by picking second element, assume the first elemeng is already sorted... why..?
    //compaer second with one before and swap
    //increment
    if(arr.length == 0) {
        return arr;
    }
    for(let i = 1; i < arr.length;i++) {
        let current = arr[i];
        let j = i-1;

        while(j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    console.log(arr);
}




insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
insertionSort([1, 2, 3]); // [1, 2, 3]
insertionSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
                     //  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]