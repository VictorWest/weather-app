import Time from "./components/Time"
import Location from "./components/Location"
import Next from "./components/Next-Days"
import { date, time, currentWeatherCode} from "../src/index.js"

let body = document.querySelector("body")

let checkWeatherCode = (code) => {
  if(code < 4){
      body.style.backgroundImage = "url(../sun.jpg)"
      return "Bright & Sunny"
  }else if(code > 44 && code < 49){
      body.style.backgroundImage = "url(../fog.jpg)"
      return "It's Foggy. Drive Safe :)"
  }else if(code > 50 && code < 58){
      body.style.backgroundImage = "url(../cloudy.jpg)"
      return "Little Clouds. No biggy"
  }else if((code > 60 && code < 68) || (code > 79 && code < 83)){
      body.style.backgroundImage = "url(../rainy.jpg)"
      return "Heavy Rainfall"
  }else if((code > 70 && code < 78) || (code > 84 && code < 87)){
      body.style.backgroundImage = "url(../snow.jpg)"
      return "Snow Approaches. Winter is here :)"
  }else if(code >= 95){
      body.style.backgroundImage = "url(../cloudy.jpg)"
      return "Thunderstorm expected"
  }else{
      return "Unavailable"
  }
}

export default function App(){
  return(
    <>
      <div className="container">
        <div className="mainbar">
            <div className="date-time">
              <div className="date">{date}</div>
              <div>|</div>
              <div className="time">{time} WAT</div>
            </div>
            
            <div className="description-display">
              <h1 className="description">{checkWeatherCode(currentWeatherCode)}</h1>
              <Time />
            </div>
        </div>
          <div className="sidebar">
            <Location />
            <Next />      
          </div>      
      </div>
    </>
  )
}


