const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;
let location = '';


if(emblemClue1 == "Eagle") {
    location = "Forum";
} else if(emblemClue1 == "Lion") {
    location = "Colosseum";
} else {
    location = "Villa";1
}


if(emblemClue2 == "Laurel" && location == "Forum") {
    location += " of Augustus";
} else if(emblemClue2 == "Grapes" && location == " VIlla") {
    location += " of Pompey";
} 


if (emblemClue3 == 7 ) { 
    location += " North";
} 
else if (emblemClue3 == 3 ) { 
    location += " South";
}
else if (emblemClue3 == 9 ) { 
    location += " East";
}
else if (emblemClue3 == 4 ) { 
    location += " West";
}

//Question:
// its ok to use == here because its a simple check,
// if I wasn't sure emblemClue3 was initialized as an int 
// I would use ===

