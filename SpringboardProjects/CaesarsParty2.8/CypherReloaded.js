const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/*
function encryptMessage(message, shiftValue) {
    let encMsg = "";
    for(let char of message) {
        const index = alphabet.indexOf(char.toLowerCase());

        let shift = (index + shiftValue) % alphabet.length;
        encMsg += alphabet[shift];
    };
    return encMsg;
}

function decryptMessage(message, shiftValue) {
    let decMsg = '';
    for(let char of message) {
        const index = alphabet.indexOf(char.toLowerCase());

        let shift = (index + shiftValue + alphabet.length) % alphabet.length;
        decMsg += alphabet[shift];
    };
    return decMsg;
}*/

function encryptDecryptMessage(message, shiftValue) {
    let msg = '';
    for(let char of message) {
        const index = alphabet.indexOf(char.toLowerCase());

        let shift = (index + shiftValue + alphabet.length) % alphabet.length;
        msg += alphabet[shift];
    };
    console.log(msg)
    return msg;
}

// decryptMessage(encryptMessage(friend, shiftValue), -shiftValue);

encryptDecryptMessage(encryptDecryptMessage(friend, shiftValue), -shiftValue)