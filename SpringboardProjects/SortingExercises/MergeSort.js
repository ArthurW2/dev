
function merge(a1, a2) {
    let retArr = [];
    let i =0;
    let j =0;
    while(i < a1.length && j < a2.length) {
        if(a1[i] < a2[j]) {
            retArr.push(a1[i++]);
        } else {
            retArr.push(a2[j++]);
        }
    }
    while(i < a1.length) {
        retArr.push(a1[i++]);
    }
    while(j < a2.length) {
        retArr.push(a2[j++]);
    }
    // console.log(retArr);
    return retArr;
}


function mergeSort(arr) {
    if(arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return(merge(left, right));

}


console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
                 //  43, 67, 75, 232, 232, 453, 546, 4342]