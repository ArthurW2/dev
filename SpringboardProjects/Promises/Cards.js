async function fetchNewDeck() {
  const url = 'https://deckofcardsapi.com/api/deck/new/';

  try {
    const response = await fetch(url);
    
    // Fetch does NOT automatically throw errors for HTTP status errors (like 404 or 500)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data["deck_id"];
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

// async function fetchDrawOne(deck_id) {
//   const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;

//   try {
//     const response = await fetch(url);
    
//     // Fetch does NOT automatically throw errors for HTTP status errors (like 404 or 500)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     let card = data.cards[0];
//     console.log('Draw 1:', card['value'], card['suit']);
//   } catch (error) {
//     console.error('Fetch error:', error.message);
//   }
// }

async function fetchDrawCards(deck_id, numCards) {
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numCards}`;

  try {
    const response = await fetch(url);
    
    // Fetch does NOT automatically throw errors for HTTP status errors (like 404 or 500)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(`Draw ${numCards}`);
    const data = await response.json();
    for(let card of data.cards) {
        // let card = data.cards[0];
        console.log(card['value'], card['suit']);
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

async function fetchShuffle(deck_id) {
  const url = `https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`;

  try {
    const response = await fetch(url);
    
    // Fetch does NOT automatically throw errors for HTTP status errors (like 404 or 500)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('deck shuffled');
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}
async function main() {
    const deckId = await fetchNewDeck();
    await fetchDrawCards(deckId, 1);
    await fetchDrawCards(deckId, 5);
    await fetchShuffle(deckId);
    await fetchDrawCards(deckId, 2);
}
// fetchNewDeck().then(deckId => {
//     fetchDrawCards(deckId,1);
//     fetchDrawCards(deckId,5);
//     fetchShuffle(deckId).then(deckId => {
//         fetchDrawCards(deckId, 2);
//     })
// });

main();