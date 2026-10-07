const friend = "BRUTUS"
// const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";






const rnd = Math.random();
const range = 33 - 3 + 1; 
//Question 1: because we want the range to be 
// inclusive of the lower bound i.e. start form 0
const rndInRange = rnd * range;
//Question 2: this scales the decimal to our range
const rndInt = Math.floor(rndInRange);
//Question 3: math.floor keeps the value within range.
//  range is effectivly 0-30, including 0.
//  .99999*31 (upper bound) = 30.99, if we use math.round 
//  then 31 would be outside our range
const shiftValue = rndInt + 3; 
//Question 4: our range is 0-31, we want it to be 3-33, so add 3...

console.log("Shift Value: " + shiftValue);