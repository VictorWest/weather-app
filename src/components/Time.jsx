import foggy from '../assets/foggy.svg'
import rainy from '../assets/rainy.svg'
import sunny from '../assets/sunny.svg'
import snowy from '../assets/snow.svg'
import thunder from '../assets/thunder.svg'
import partlyCloudy from '../assets/partly-cloudy.svg'
import TimeCard from './Time-Card'
import {intNextTenHours, weather_code} from '../index.js'

let checkWeatherCode = (code) => {
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
export {checkWeatherCode}
export default function Time(){
    return(
        <div className='time-card'>
            <TimeCard time = "00:00" svg = {checkWeatherCode(weather_code[0])} temp = {intNextTenHours[0]}/>
            <TimeCard time = "02:00" svg = {checkWeatherCode(weather_code[1])} temp = {intNextTenHours[1]}/>
            <TimeCard time = "04:00" svg = {checkWeatherCode(weather_code[2])} temp = {intNextTenHours[2]}/>
            <TimeCard time = "06:00" svg = {checkWeatherCode(weather_code[3])} temp = {intNextTenHours[3]}/>
            <TimeCard time = "08:00" svg = {checkWeatherCode(weather_code[4])} temp = {intNextTenHours[4]}/>
            <TimeCard time = "10:00" svg = {checkWeatherCode(weather_code[5])} temp = {intNextTenHours[5]}/>
            <TimeCard time = "12:00" svg = {checkWeatherCode(weather_code[6])} temp = {intNextTenHours[6]}/>
            <TimeCard time = "14:00" svg = {checkWeatherCode(weather_code[7])} temp = {intNextTenHours[7]}/>
            <TimeCard time = "16:00" svg = {checkWeatherCode(weather_code[8])} temp = {intNextTenHours[8]}/>
            <TimeCard time = "18:00" svg = {checkWeatherCode(weather_code[9])} temp = {intNextTenHours[9]}/>
        </div>
    )
}