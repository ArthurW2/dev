async function fetchRandomJoke() {
  const url = 'https://official-joke-api.appspot.com/random_joke';
  console.log('start');

  try {
    const response = await fetch(url);
    
    // Fetch does NOT automatically throw errors for HTTP status errors (like 404 or 500)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

async function fetchTenJokes() {
  const url = 'https://official-joke-api.appspot.com/random_ten';
  console.log('start');

  try {
    const response = await fetch(url);
    
    // Fetch does NOT automatically throw errors for HTTP status errors (like 404 or 500)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    for(let joke of data) {
        console.log('Success:', joke);
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

async function fetchJokesByType() {
  const url = 'https://official-joke-api.appspot.com/jokes/programming/ten';
  console.log('start');

  try {
    const response = await fetch(url);
    
    // Fetch does NOT automatically throw errors for HTTP status errors (like 404 or 500)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    for(let joke of data) {
        console.log('Success:', joke);
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

async function fetchAllJokes() {
  
  const urls = [
    'https://official-joke-api.appspot.com/random_joke',
    'https://official-joke-api.appspot.com/random_ten',
    'https://official-joke-api.appspot.com/jokes/programming/ten'
    ];


  try {

    const fetchPromises = urls.map(url => fetch(url));
    const responses = await Promise.all(fetchPromises);

    
    responses.forEach(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    });

    const jsonPromises = responses.map(response => response.json());
    const [rndJoke, tenJokes, jokesByType] = await Promise.all(jsonPromises);

    console.log('Random Joke:', rndJoke);
    console.log('10 Random Jokes:', tenJokes);
    console.log('Random 10 Jokes by type:', jokesByType);
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}


// fetchRandomJoke();
// fetchTenJokes();
// fetchJokesByType();
fetchAllJokes();