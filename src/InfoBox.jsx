import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Icon from '@mui/material/Icon';
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";



export default function InfoBox({info}){
    const INIT_URL="https://media.istockphoto.com/id/1899726798/photo/pokhara-crowded-house-second-large-city-in-nepal-dense-poulation-for-tourism.jpg?s=612x612&w=is&k=20&c=ht3uswSLBfuip2H9eXG0iI7KT6bwa438CND_bxqUZ3E=";
    const HOT_URL="https://media.istockphoto.com/id/534031718/photo/summer-sandy-beach-with-palm-trees-in-sunset.jpg?s=2048x2048&w=is&k=20&c=l_MCGowEtkOL1KXIMnkO-UUNt9HojisORFNuC-ZwNls=";
    const COLD_URL="https://media.istockphoto.com/id/902901812/photo/native-holly-bush-with-a-light-dusting-of-snow.jpg?s=1024x1024&w=is&k=20&c=jVUYBwZx95V7Oll8kVdZwbzlM0LYDbZNO6dYHopevzU=";
    const RAIN_URL="https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=is&k=20&c=qjmanyBE0Db4HG_AMBzvBNfyOq4xGheeuiDBzE0FLUo=";
    // let info={
    //     feelslike:28.84,
    //     temp:25.05,
    //     tempMin:25.05,
    //     tempMax:25.05,
    //     humidity:47,
    //     weather:"haze",
    //     city:"city",
    // }
    return (
        <div className="InfoBox" >
            {/* <h1>Weather= {info.weather}</h1> */}

            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    // image={INIT_URL}
                    image={
                        info.humidity>80
                        ?RAIN_URL
                        :info.temp>15?
                        HOT_URL
                        :COLD_URL
                    }
                        
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <h2>{info.city}
                    {
                        info.humidity>80
                        ?<ThunderstormIcon/>
                        :info.temp>15?
                        <WbSunnyIcon/>
                        :<AcUnitIcon/>
                    }
                    </h2>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                    {/* <Typograph variant="body2" color="text.secondary" component="div"> */}
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Min Temp: {info.tempMin}</p>
                    <p>Max Temp: {info.tempMax}</p>
                    <p>The weather can be described ad <i>{info.weather}&deg;C </i> and feels like <i>{info.feelslike}&deg;C</i>.</p>

                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    )
}