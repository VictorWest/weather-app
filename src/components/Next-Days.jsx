import foggy from '../assets/foggy.svg'
import rainy from '../assets/rainy.svg'
import sunny from '../assets/sunny.svg'
import snowy from '../assets/snow.svg'
import thunder from '../assets/thunder.svg'
import partlyCloudy from '../assets/partly-cloudy.svg'
import DayCard from './Day-Card'
import { formattedDays, futureWeatherCodes, futureTemperature} from '../index.js'

let checkWeatherCode = (code) => {
    if(code < 4){
        return "Sunny"
    }else if(code > 44 && code < 49){
        return "Fog"
    }else if(code > 50 && code < 58){
        return "Partly Cloudy"
    }else if((code > 60 && code < 68) || (code > 79 && code < 83)){
        return "Heavy Rainfall"
    }else if((code > 70 && code < 78) || (code > 84 && code < 87)){
        return "Snow"
    }else if(code >= 95){
        return "Thunderstorm"
    }else{
        return "Unavailable"
    }
}
let checkWeatherCodeForSVG = (code) => {
    if(code < 4){
        return sunny
    }else if(code > 44 && code < 49){
        return foggy
    }else if(code > 50 && code < 58){
        return partlyCloudy
    }else if((code > 60 && code < 68) || (code > 79 && code < 83)){
        return rainy
    }else if((code > 70 && code < 78) || (code > 84 && code < 87)){
        return snowy
    }else if(code >= 95){
        return thunder
    }else{
        return "Unavailable"
    }
}
export default function Next(){
    return(
        <div className="next-days">
            <h3>The Next Days Forecast</h3>
            {/* <div className="days">
                <p className="days-p five-days">5 days</p>
                <div>|</div>
                <p className="days-p fourteen-days">14 days</p>
                <div>|</div>
                <p className="days-p thirty-days">30 days</p>
            </div> */}
            <DayCard svg={checkWeatherCodeForSVG(futureWeatherCodes[1])} date = {formattedDays[0]} dsc = {checkWeatherCode(futureWeatherCodes[1])} temp = {futureTemperature[1] + "°C"}/>
            <DayCard svg={checkWeatherCodeForSVG(futureWeatherCodes[2])}  date = {formattedDays[1]} dsc = {checkWeatherCode(futureWeatherCodes[2])} temp = {futureTemperature[2] + "°C"}/>
            <DayCard svg={checkWeatherCodeForSVG(futureWeatherCodes[3])}  date = {formattedDays[2]} dsc = {checkWeatherCode(futureWeatherCodes[3])} temp = {futureTemperature[3] + "°C"}/>
            <DayCard svg={checkWeatherCodeForSVG(futureWeatherCodes[4])}  date = {formattedDays[3]} dsc = {checkWeatherCode(futureWeatherCodes[4])} temp = {futureTemperature[4] + "°C"}/>
            <DayCard svg={checkWeatherCodeForSVG(futureWeatherCodes[5])}  date = {formattedDays[4]} dsc = {checkWeatherCode(futureWeatherCodes[5])} temp = {futureTemperature[5] + "°C"}/>
        </div>
    )
}