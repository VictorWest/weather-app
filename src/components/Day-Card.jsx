export default function DayCard(props){
    return(
        <div className="day-card">
            <img src={props.svg}></img>
            <div>
                <p className="day-card-date">{props.date}</p>
                <p className="day-card-dsc">{props.dsc}</p>                
            </div>
            <div>|</div>
            <p className="day-card-temp">{props.temp}</p>
        </div>

    )
}