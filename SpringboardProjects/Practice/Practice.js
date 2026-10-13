/*  javascript doesn't have a standard queue object so we'll use a premade 3rd party implementation
    The reason we're using this is because a map in javascript 
    doesn't have the ability to append to the start or end of the list
    and what we're trying to accomplish is pushing the larger numbers to the top 
    and the smaller numbers to the bottom, then pop the top off to return the second largest value
    we will need to handle a few cases like popping/shifting values so things are in the right order
    and we will also need to run a check that the largest number we popped off isn't the same as the second
    item in the queue. and if in that process we run out of items we'll return -1

    talk about over engineering XD
*/  
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // O(1)
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.pop(); // O(n) - Performance bottleneck
  }

  peek() {//reversing this i want to look at the end
    return this.items[this.size()-1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function secondLargest(nums) {
    let queue = new Queue();
    let storage = new Queue();
    queue.enqueue(nums[0]); 
    
    // tail will always be largest
    for(var num of nums) {
        if(queue.peek === num) {
            continue; //skip duplicates;
        }
        if(queue.peek() < num) { //if tail < num push num
            queue.enqueue(num); 
        }else {// tail > num so.. 
            //aka [1,4, 6, 8] placing 7, pop 8, push 7, then push 8
            //also account for [1,4,6,8] placing 3, pop and push to storage 8, 6, 4,
            //push 3 then pop and push from storage back 4, 6, 8
            // pop off elements and store them in temp queue 
            // until we reach the correct placement           
            //worst case O(n) we're placing 1 in an array of [2,3,4,5,6,7,etc]; 
            let temp = queue.dequeue(); 
            while(temp < num && !queue.isEmpty()) { 
                storage.enqueue(temp);
                temp = queue.dequeue();
            }
            //we've reached the position where temp < num
            //push num, then push temp, then push the rest
            queue.enqueue(num); 
            queue.enqueue(temp);
            //storage is ordered large to small so pop tail and push back to main queue
            while(!storage.isEmpty()) {//again worst case O(n) where storage is the full array
                temp = storage.dequeue();
                queue.enqueue(temp);
            }
        }
        // console.log("end: head: " + queue.peek() + ": num: " +num);
    }
    //we've reached the end of the data processing
    //pop top value and return new head
    let top = queue.peek();
    while(top === queue.peek()) {
        top = queue.dequeue();
    }
    
    return queue.isEmpty() ? -1 :  queue.peek();
    
}


// function secondLargest(nums) {
//     // Write your solution here
//     let largest = nums[0];
//     let secLargest = -1;

//     //hashmap - loads into hash map
//     //sort map - pop top value 
//     //top value is second l
//     //----
//     //Trie
//     //one node to the right
//     // >root -> right
//     // < root -> left
//     // root is second largest
    
//     for (var i = 0; i < nums.length; i++) {
//         //track each number
//         //compare against previous number
//         //track the largest
//         //and second largest
        
//         if(nums[i] > largest) {
//             secLargest = largest;
//             largest = nums[i];
//         } else if (secLargest < nums[i] && nums[i] !== largest) {
//             //swap so largest is largets
//             secLargest = nums[i];
//         } 
//     }

//     return secLargest;
// }




// Test cases
console.log(secondLargest([10, 5, 8, 20, 15])); // 15
console.log(secondLargest([4, 4, 4, 4]));        // -1
console.log(secondLargest([3, 9, 1, 9, 7]));     // 7
console.log(secondLargest([5, 2]));             // 2
console.log(secondLargest([10]));               // -1
