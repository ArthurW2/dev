// n > 0 && n < 100

const n = Math.floor(Math.random() * 100) +1;
console.log("n = " + n);

function fizzBuzz (n) {
    for(let i = 0; i < n; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if(i % 3 == 0) {
            console.log("Fizz");
        } else if(i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(n);