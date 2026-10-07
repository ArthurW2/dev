const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

guests["BRUTUS"] = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
};

guests.CICERO.pastGifts.push("Golden Lyre");

console.log(guests.ANTONY.region);

delete guests.CICERO;

const generalProfile = guests.ANTONY;

guests.ANTONY.region = "Egypt";
console.log(guests.ANTONY.region);
//Question 1: Egypt