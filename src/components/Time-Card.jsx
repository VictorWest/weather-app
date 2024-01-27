// import './index.css'
export default function TimeCard(props){
    return(
        <div className="time-display">
            <p className="time">{props.time}</p>
            <img src={props.svg}></img>
            <p>{props.temp}°C</p>
        </div>
    )
}