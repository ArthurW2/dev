const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedFriend = '';

for(let letter of friend) {
    let idx = alphabet.indexOf(letter.toLowerCase());
    
    encryptedFriend += alphabet[idx+shiftValue].toUpperCase();
    //I'm not accounting for the z-case loop around because we know brutus is within range
}
console.log(encryptedFriend);

//Question 1: easier to write programatically, more flexible and better readability.

//Question 2: the modulus operator is used to loop 
// from end to beginning because it takes the remainder of a divide operation
//  (currentIndex + shiftValue) % alphabet.length;
//  e.g: 25+3 % 26 = 27 %26 = 1