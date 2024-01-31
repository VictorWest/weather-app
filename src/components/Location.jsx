import locationSVG from '../assets/location.svg'
import world from '../assets/world.svg'
import { currentTemp, sunrise, sunset, timeZone} from '../index.js'
export default function Location(){
    return(
        <div className='location'>
            <div className='location-tab'>
                <img src={locationSVG} className='location'></img>
                <input type='text' id='region' name='region' placeholder={timeZone} autoFocus autoComplete='true'></input>
                <button type='submit' className='submit'>
                    <img src={world} className='dropdown'></img>
                </button>
            </div>
            <h1 className="main-display">{currentTemp}°C</h1>
            <div className='sunrise-sunset'>
                <p>Sunrise: {sunrise}</p>
                <p>Sunset: {sunset}</p>           
            </div>
        </div>
    )
}