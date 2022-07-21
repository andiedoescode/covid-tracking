const WORLD_DATA = `https://api.covid19api.com/summary`

//fetching global data
fetch(WORLD_DATA)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.Countries)
        const worldData = data.Global

        function formatNum(id){
            let finalNum = worldData[id]
            return Intl.NumberFormat().format(finalNum)
        }

        document.querySelector('#newConfirmedWorld').innerText = formatNum('NewConfirmed')
        document.querySelector('#newDeathsWorld').innerText = formatNum('NewDeaths')
        document.querySelector('#totalConfirmedWorld').innerText = formatNum('TotalConfirmed')
        document.querySelector('#totalDeathsWorld').innerText = formatNum('TotalDeaths')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

//defining new country objects
class NewCountry{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
} 

let canada = new NewCountry('Can', 31)
let usa = new NewCountry('US', 186)

//fetching data for defined countries
function countryData(country){
    fetch(WORLD_DATA)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const countryData = data.Countries[Number(`${country.id}`)]
        console.log(data.Countries[`${country.id}`])

        function formatNum(id){
            let finalNum = countryData[id]
            return Intl.NumberFormat().format(finalNum)
        }

        document.querySelector('#newConfirmed'+`${country.name}`).innerText = formatNum('NewConfirmed')
        document.querySelector('#newDeaths'+`${country.name}`).innerText = formatNum('NewDeaths')
        document.querySelector('#totalConfirmed'+`${country.name}`).innerText = formatNum('TotalConfirmed')
        document.querySelector('#totalDeaths'+`${country.name}`).innerText = formatNum('TotalDeaths')
        })
      .catch(err => {
          console.log(`error ${err}`)
        });
}


countryData(canada)
countryData(usa)