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

