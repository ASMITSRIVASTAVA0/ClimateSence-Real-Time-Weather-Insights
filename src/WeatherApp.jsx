import {useState} from "react"

import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        feelslike:28.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
        city:"city",
    })

    let updateInfo=(newResult)=>{
        setWeatherInfo(newResult);
    }


    return (
        <div style={{textAlign:"center"}}>
            <h2 style={{fontSize:"2rem"}}>Weather Wiglet</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}