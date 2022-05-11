const URL = 'https://icanhazdadjoke.com/'
const URL_CHUCK = 'https://api.chucknorris.io/jokes/random'
const mainCite = document.querySelector('main cite')

// fetching joke
const jokeFetcher = async () => {
  const res = await fetch(URL, {
    headers: {
      Accept: 'application/json',
    },
  })
  const data = await res.json()
  mainCite.textContent = data.joke
  mainCite.id = data.id
}
// fetching joke Chuck Norris
const chuckFetcher = async () => {
  const res = await fetch(URL_CHUCK)
  const data = await res.json()
  mainCite.textContent = data.value
  mainCite.id = data.id
}

// injecting joke to DOM
jokeFetcher()
document.querySelector('main button')
.addEventListener('click',
() => ( Math.floor(Math.random() * 2) === 0 ) ? jokeFetcher() : chuckFetcher())

// data jokes recollection from radio button poll
const reportJokes = []

const polls = document.querySelectorAll('fieldset input[type="radio"]')

for (const poll of polls) {
  poll.addEventListener('change', () => {
    if (reportJokes.length > 0) {
     reportJokes.find((joke) => {
        if (joke.id == mainCite.id) reportJokes.pop()
        poll.checked = false
      })
    }

    reportJokes.push({
      id: mainCite.id,
      joke: mainCite.textContent,
      score: poll.value,
      date: new Date().toISOString(),
    })
    poll.checked = false
    console.log('checked', reportJokes)
  })
}

// weather fetching
const API_KEY = '312b8589ef615acb614ad468b8a4d555'
const BASE_WEATHER = 'https://api.openweathermap.org/data/2.5/weather'
let city = 'Barcelona'
// TODO: dinamically create a form to add a new city
const URL_WEATHER = `${BASE_WEATHER}?q=${city}&lang=es&units=metric&appid=${API_KEY}`

const weatherFetcher = async () => {
  const res = await fetch(URL_WEATHER)
  const data = await res.json()
  console.log(data.weather[0].description, data.main) // checking if everything is ok
  // document.querySelector('main .weather').textContent = data.weather[0].description
  document.querySelector('main .weather')
  .innerHTML = `<img 
   src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
   alt="${data.weather[0].description}"
   title="${data.weather[0].description}" />
   ${data.main.temp} °C <br /> ${data.name}`
}

weatherFetcher()