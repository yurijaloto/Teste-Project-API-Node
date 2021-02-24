const request = require('request')

const forecast = (lugar) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=3830e5bd3e505c87f662d93252479d22&query='+lugar

    request({ url, json: true }, (error, response) => {
        return JSON.parse(response)
        //if (error) {
        //    callback('Unable to connect to weather service!', undefined)
        //} else if (body.error) {
        //    callback('Unable to find location', undefined)
        //} else {
        //    callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    )
}   

console.log(forecast('New York'))

//module.exports = forecast