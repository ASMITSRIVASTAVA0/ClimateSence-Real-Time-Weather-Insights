import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"

import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");

    let [error,setError]=useState(false);

    // query string htadena
    // const API_URL="https://api.openweathermap.org/data/2.5/weather";
    // const API_KEY="ec5f606250afec57b5f3945f7f03cd33";  
    // const API_KEY="ec5f606250afec57b5f3945f7f03cd33";
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ec5f606250afec57b5f3945f7f03cd33";

    
    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);

        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_max,
            tempMax:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);

        return result;
        }
        catch(err)
        {
            // setError("No such place in our API!");
            throw err;
        }

    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

  

    let handleSubmit=async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        
        setCity("");
        let newResult=await getWeatherInfo();

        updateInfo(newResult);
        }
        catch(err)
        {
            setError(true);
        }

       
    }
    return (
        <div className="SearchBox">
            <h3>Search for the Weather</h3>
            
            <form onSubmit={handleSubmit} >
                <TextField
                id="city"
                label="City Name"
                variant="outlined"
                required
                value={city}
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" >Search</Button>
                <br></br>
                <br></br>
                {error&&<h2 style={{color:"red"}}>No such place in our API!</h2>}
            </form>
        </div>
    )
}