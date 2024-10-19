
const url = `https://v6.exchangerate-api.com/v6/a855264725759698e5ee00e0/latest/USD`;
//money exchange API
document.querySelector('#convertBtn').addEventListener('click', convertMoney)

function convertMoney() {
    fetch(url)
        .then(res => res.json()) // parse response as JSON 
        .then(data => {
            // console.log(data)
            // console.log(data.base_code)
            //access point to the current rates
            let multiplier = document.querySelector('#moneyInserted').value
            //iterate over every element in obj
            for (let key in data.conversion_rates) {
                if (data.conversion_rates) {
                    data.conversion_rates[key] *= multiplier

                }
            }
            const usd = data.conversion_rates.USD
            //US dollars
            document.querySelector('#USD').innerText =  `USD 🇺🇸 $ ${usd}`
            //GB pound
            const gbp = Math.floor(data.conversion_rates.GBP) 
            document.querySelector('#GBP').innerText =  `GBP 🇬🇧 £ ${gbp}`
            //EU euro
            const eur = Math.floor(data.conversion_rates.EUR)
            document.querySelector('#EUR').innerText =  `EUR 🇪🇺 € ${eur}`
            //JP yen
            const jpy = Math.floor(data.conversion_rates.JPY)
            document.querySelector('#JPY').innerText =  `JPY 🇯🇵 ¥ ${jpy}`
            //AU dollar
            const aud = Math.floor(data.conversion_rates.AUD)
            document.querySelector('#AUD').innerText =  `AUD 🇦🇺 $ ${aud}`
            //CA dollar
            const cad = Math.floor(data.conversion_rates.CAD) 
            document.querySelector('#CAD').innerText =  `CAD 🇨🇦 $ ${cad}`
            //Swiss franc
            const chf = Math.floor(data.conversion_rates.CHF) 
            document.querySelector('#CHF').innerText =  `CHF 🇨🇭 Fr ${chf}`
            //New Zealand dollar
            const nzd = Math.floor(data.conversion_rates.NZD) 
            document.querySelector('#NZD').innerText =  `NZD 🇳🇿 $ ${nzd}`
            //hong kong dollar
            const hkd = Math.floor(data.conversion_rates.HKD)
            document.querySelector('#HKD').innerText =  `HKD 🇭🇰 $ ${hkd}`

        }).catch(err => {
            console.log(`error ${err}`)
        });
}

//don't forget about catch for error


//PREP
//Para - 
//Return
//Examples
//Pseudo Code