const message = "Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!";

const friend = "Tdgfge"
const shiftValue = 42;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Helper: normalize shift into 0..25
function normalizeShift(shift) {
  // Negative values handled by ((shift % 26) + 26) % 26
  return ((shift % 26) + 26) % 26;
}
// Helper: shift a single alphabetic character preserving case
function shiftChar(char, shift) {
  const isUpper = char === char.toUpperCase() && char !== char.toLowerCase();
  const baseCode = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const code = char.charCodeAt(0) - baseCode;
  const newCode = (code + shift + 26) % 26; // +26 to be safe for negative
  return String.fromCharCode(baseCode + newCode);
}


function encryptMessage(message, shift){
    let encMsg = "";
    //loop through friend and for each char assign new letter to encrypted name
    let index = 0;
    for(char of message)  {        
        if (char.toLowerCase() !== char.toUpperCase()) {
            encMsg += shiftChar(char, shift);
        } else {
            encMsg += char;
        }
        index++;
        if(index % 2 == 0 && index > 0) {
            encMsg += "!"; //using ! instead of a random letter for visibility
        }
    }
    console.log("encrypted: " + encMsg);
    return encMsg;
}

function decryptMessage(message, shift) {
    let decMsg = '';
    //decrypt name back to original using same method in reverse
    let filteredMsg = "";
    for(let index in message) {
        if((index % 3) !== 2) {
            filteredMsg += message[index];
        }
    }
    for(char of filteredMsg)  {
        
        if (char.toLowerCase() !== char.toUpperCase()) {
            decMsg += shiftChar(char, shift);
        } else {
            decMsg += char;
        }
    }
    console.log("decrypted: " + decMsg);
    return decMsg;
}

const decMsg = decryptMessage(message, normalizeShift(-shiftValue));
const encMsg = encryptMessage(decMsg, normalizeShift(shiftValue));


/*
Complete, commented solution for the Caesar Cipher exercise.
 - encrypt(message, shiftValue): shifts letters, preserves case, passes non-alpha unchanged,
   and inserts a random letter after every 2 characters in the encrypted output.
 - decrypt(encryptedMessage, shiftValue): reverses the insertion and shifts letters back.
 - Uses modulus to handle large shift values.
 - Well-documented with comments and attribution section.


const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Helper: normalize shift into 0..25
function normalizeShift(shift) {
  // Negative values handled by ((shift % 26) + 26) % 26
  return ((shift % 26) + 26) % 26;
}

// Helper: shift a single alphabetic character preserving case
function shiftChar(char, shift) {
  const isUpper = char === char.toUpperCase() && char !== char.toLowerCase();
  const baseCode = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const code = char.charCodeAt(0) - baseCode;
  const newCode = (code + shift + 26) % 26; // +26 to be safe for negative
  return String.fromCharCode(baseCode + newCode);
}

// Helper: pick a random lowercase letter (used only in encryption to add noise)
function randomLetter() {
  const idx = Math.floor(Math.random() * 26);
  return alphabet[idx];
}

// Main encryption function
function encrypt (message, shiftValue) {
  // Something of a thought process:
  // 1. Normalize the shift to 0-25 using modulo so very large shifts behave predictably.
  // 2. Iterate through message characters; if letter, shift it; otherwise, keep it.
  // 3. While building the encrypted string, after every two characters appended, insert a random letter.
  //    We count every appended character (including non-alpha characters) as part of the two-character window.
  //    This matches the requirement: 'After every two letters, insert a random letter from the alphabet.'
  //    (If you prefer counting only alphabetic letters, change the counter condition accordingly.)
  const shift = normalizeShift(shiftValue);
  let encrypted = "";
  let counter = 0; // counts appended characters in the encrypted result (resets after inserting random)
  for (let i = 0; i < message.length; i++) {
    const ch = message[i];
    // Check if alphabetic character
    if (ch.toLowerCase() !== ch.toUpperCase()) {
      // It's a letter; shift preserving case
      encrypted += shiftChar(ch, shift);
    } else {
      // Non-letter (space, punctuation) -> pass through
      encrypted += ch;
    }
    counter++;
    // After every two appended characters, insert a random letter and reset counter
    if (counter === 2) {
      encrypted += randomLetter();
      counter = 0;
    }
  }
  return encrypted;
}

// Main decryption function
function decrypt (encryptedMessage, shiftValue) {
  // Once again, a thought process:
  // 1. We know encryption inserted a random letter after every two chars in the output.
  //    So we must remove every 3rd character starting from index 2 (0-based).
  // 2. After removing these noise characters, shift letters back by the shiftValue to recover original.
  // 3. Preserve non-alpha characters and case.
  // Note: This strategy assumes the encrypt function always inserted noise after every two characters
  //       including non-alpha characters. If your encryption counted only alpha letters, adjust accordingly.
  // First, remove the random letters:
  let filtered = "";
  for (let i = 0; i < encryptedMessage.length; i++) {
    // Keep characters whose (i % 3) !== 2 : removes indices 2,5,8,...
    if ((i % 3) !== 2) filtered += encryptedMessage[i];
  }
  // Now shift back by shiftValue (i.e., shift by -shiftValue)
  const shift = normalizeShift(-shiftValue);
  let decrypted = "";
  for (let i = 0; i < filtered.length; i++) {
    const ch = filtered[i];
    if (ch.toLowerCase() !== ch.toUpperCase()) {
      decrypted += shiftChar(ch, shift);
    } else {
      decrypted += ch;
    }
  }
  return decrypted;
}


// console.log(message);
const decMsg = decrypt(message, shiftValue);
console.log(decMsg);
// const encMsg = encrypt(decMsg, shiftValue);
// console.log(encMsg);
// if(encMsg == message) {
//     console.log("IT WORKED");
// }

*/