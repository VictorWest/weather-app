//Date and Time functionality
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const day = new Date().getDate()
const month = new Date().getMonth()
const year = new Date().getFullYear()
const hour = new Date().getHours()
const minute = new Date().getMinutes()

const date = `${day} ${months[month]} ${year}`
let time
if(minute < 10){
    time = `${hour}:0${minute}`
}else{
    time = `${hour}:${minute}`
}

let nextDays = (i) => {
    const day = new Date(new Date().setDate(new Date().getDate() + i)).getDate()
    return day
}
let verifyMonth = (i) => {
    const month = new Date(new Date().setDate(new Date().getDate() + i)).getMonth()
    return month
}
let verifyYear = (i) => {
    const year = new Date(new Date().setDate(new Date().getDate() + i)).getFullYear()
    return year
}
let formDate = (day, month, year) => {
    const date = `${day} ${months[month]} ${year}`
    return date
}
let formattedDays = []
let nextDay1 = nextDays(1)
let verifyMonth1 = verifyMonth(1)
let verifyYear1 = verifyYear(1)
formattedDays.push(formDate(nextDay1, verifyMonth1, verifyYear1))


let nextDay2 = nextDays(2)
let verifyMonth2 = verifyMonth(2)
let verifyYear2 = verifyYear(2)
formattedDays.push(formDate(nextDay2, verifyMonth2, verifyYear2))

let nextDay3 = nextDays(3)
let verifyMonth3 = verifyMonth(3)
let verifyYear3 = verifyYear(3)
formattedDays.push(formDate(nextDay3, verifyMonth3, verifyYear3))

let nextDay4 = nextDays(4)
let verifyMonth4 = verifyMonth(4)
let verifyYear4 = verifyYear(4)
formattedDays.push(formDate(nextDay4, verifyMonth4, verifyYear4))

let nextDay5 = nextDays(5)
let verifyMonth5 = verifyMonth(5)
let verifyYear5 = verifyYear(5)
formattedDays.push(formDate(nextDay5, verifyMonth5, verifyYear5))

console.log(formattedDays)
//API Fetch
const lat = "4.8472"
const lon = "6.9746"

//Daily Fetch
async function cities(){
   let APIUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&daily=sunrise,sunset,weather_code,temperature_2m_max&timezone=auto&forecast_days=16`

   let result = await fetch(APIUrl)
   let data = await result.json()
   console.log(data)
   return data
}
let data = await cities()
let count = 0

const nextTenHours = (data.hourly.temperature_2m).filter(() => {
    count++
    return count %2
})

let intNextTenHours = nextTenHours.map((e) => {
    return Math.round(e)
})

let timeZone = data.timezone.toUpperCase()
let currentTemp = Math.round(data.current.temperature_2m)
let sunriseData = data.daily.sunrise[0]
let sunrise = sunriseData.substring((sunriseData.length - 5), sunriseData.length)

let sunsetData = data.daily.sunset[0]
let sunset = sunsetData.substring((sunsetData.length - 5), sunsetData.length)
let newCount = 0
let weather_code = (data.hourly.weather_code).filter(() => {
    newCount++
    return newCount %2
})
let currentWeatherCode = data.current.weather_code

let futureWeatherCodes = data.daily.weather_code
let futureTemperature = (data.daily.temperature_2m_max).map((e) => {
    return Math.round(e)
})

export {date, time, formattedDays, intNextTenHours, timeZone, currentTemp, sunrise, sunset, weather_code, currentWeatherCode, futureWeatherCodes, futureTemperature}
