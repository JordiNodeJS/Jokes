const URL = 'https://icanhazdadjoke.com/'

// Promises
const dataFetcher = fetch(URL, {
  headers: {
    Accept: 'application/json',
  },
})
  .then(res => res.json())
  .then(data => document.querySelector('main cite').textContent = data.joke)
