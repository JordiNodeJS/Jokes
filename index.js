const URL = 'https://icanhazdadjoke.com/'

const fetcher = async () => {
  const res = await fetch(URL, {
    headers: {
      Accept: 'application/json',
    },
  })
  const data = await res.json()
  document.querySelector('main cite').textContent = data.joke
}

fetcher()
