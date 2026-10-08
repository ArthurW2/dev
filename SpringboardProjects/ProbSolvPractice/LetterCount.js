const word = "SomeWordThatImMakingUp";
const wordBank = new Map();

function letterCount (w) {
    //process data
    //create hash set to store letters and frequency
    //print set
    for(var letter of w) {
        if(wordBank.has(letter)) {
            wordBank.set(letter, wordBank.get(letter)+1);
        } else {
            wordBank.set(letter, 1);
        }
    }

    for(var key of wordBank.keys()) {
        console.log(key + ": " + wordBank.get(key));
    }
}

letterCount(word);