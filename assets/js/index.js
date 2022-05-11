const URL = 'https://icanhazdadjoke.com/'
const mainCite = document.querySelector('main cite')

// fetching joke
const fetcher = async () => {
  const res = await fetch(URL, {
    headers: {
      Accept: 'application/json',
    },
  })
  const data = await res.json()
  mainCite.textContent = data.joke
  mainCite.id = data.id
}

// injecting joke to DOM
fetcher()
document.querySelector('main button').addEventListener('click', fetcher)

// data jokes recollection from radio button poll
const reportJokes = []

const polls = document.querySelectorAll('fieldset input[type="radio"]')

for (const poll of polls) {
  poll.addEventListener('change', () => {
    if (reportJokes.length > 0) {
     reportJokes.find((joke) => {
        if (joke.id == mainCite.id) reportJokes.pop()
      })
    }

    reportJokes.push({
      id: mainCite.id,
      joke: mainCite.textContent,
      score: poll.value,
      date: new Date().toISOString(),
    })
    console.log('checked', reportJokes)
  })
}
