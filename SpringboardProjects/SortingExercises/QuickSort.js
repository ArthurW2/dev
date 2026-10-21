function pivot(arr) {
    let index = 0;
    let left = [];
    let right = [];
    let idxVal = arr[index];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[index]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    arr.splice(0, arr.length, ...left, idxVal, ...right);

    return left.length;
}

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let p = pivot(arr);

    let left = arr.slice(0, p);
    let right = arr.slice(p+1);
    left = quickSort(left);
    right = quickSort(right);

    return [...left, arr[p], ...right];

}


// Test cases
console.log(quickSort([4, 20, 12, 10, 7, 9]));
// [4, 7, 9, 10, 12, 20]

console.log(quickSort([0, -10, 7, 4]));
// [-10, 0, 4, 7]

console.log(quickSort([1, 2, 3]));
// [1, 2, 3]

console.log(quickSort([]));
// []

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32,
    4, 35, 34, 23, 2, 453, 546, 75, 67,
    4342, 32
];

console.log(quickSort(nums));
// [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
//  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]