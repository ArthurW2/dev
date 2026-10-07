const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const index = alphabet.indexOf(friend[0].toLowerCase());

//Q1:
// arrays start at 0
let shift = index + shiftValue;
if(shift > alphabet.length) {
    shift = index % shiftValue;
}
let encryptFirstLetter = alphabet[shift].toUpperCase();
let encryptedName = "";

//loop through friend and for each char assign new letter to encrypted name
[...friend].forEach((char) => {
    encryptedName += alphabet[alphabet.indexOf(char.toLowerCase())+shift];
});

//slice enc name for teaser
let teaserMessage = encryptedName.slice(0,3);

//print names
console.log(teaserMessage);
console.log(encryptedName);

//test cypher
let decryptedName = '';
console.log("REVERSE");
//decrypt name back to original using same method in reverse
[...encryptedName].forEach((char) => {
    decryptedName += alphabet[alphabet.indexOf(char.toLowerCase())-shift]
})
console.log(decryptedName.toUpperCase());