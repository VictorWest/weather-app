import locationSVG from '../assets/location.svg'
import dropdown from '../assets/dropdown.svg'
import { currentTemp, sunrise, sunset, timeZone } from '../index.js'
export default function Location(){
    return(
        <>
            <div className='location-tab'>
                <img src={locationSVG} className='location'></img>
                <h3>{timeZone}</h3>
                <img src={dropdown} className='dropdown'></img>
            </div>
            <h1 className="main-display">{currentTemp}°C</h1>
            <div className='sunrise-sunset'>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>                
            </div>
        </>
    )
}