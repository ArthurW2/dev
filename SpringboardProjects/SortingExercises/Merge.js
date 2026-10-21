
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
    console.log(retArr);
    return retArr;
}


let arr1 = [1,3,4,5];
let arr2 = [2,4,6,8];
merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2,-1,0,4,5,6];
let arr4 = [-3,-2,-1,2,3,5,7,8];

merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3,4,5]
let arr6 = [1,2]

merge(arr5,arr6) // [1,2,3,4,5]