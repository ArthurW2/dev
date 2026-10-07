console.log("Hi");


const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.splice(0, 0,"BRUTUS");
//Question1:
console.log(guests.slice(0,1));

guests.push("AUGUSTUS", "LUCIA");

console.log("Has SPARTACUS been invited? " + guests.includes("SPARTACUS"));
//Question2: False;

console.log("CASSIUS at: " + guests.indexOf("CASSIUS"));
guests.splice(guests.indexOf("CASSIUS"), 1);

console.log("attendies: " + guests)

const specialGuests = guests.slice(0,3);

console.log("vips: " + specialGuests);

const bff = specialGuests[0];
const sortedGuests = guests.slice(1, guests.length).sort();
sortedGuests.unshift(bff);

console.log("sorted: " + sortedGuests);
