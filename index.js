const URL = 'https://icanhazdadjoke.com/'

fetch(URL, {
  headers: {
    Accept: 'application/json',
  },
})
  .then(res => res.json())
  .then(data => console.log(data))
