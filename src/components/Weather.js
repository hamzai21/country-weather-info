import weatherService from '../services/weather';
import {useState, useEffect} from 'react';

const Weather = ({country}) => {
    const [weatherInfo, setWeatherInfo] = useState(null);

    useEffect(() => {
        weatherService
        .getWeather(country)
        .then(response => {
            console.log(response);
            setWeatherInfo(response);
            response.weather.map(prop => console.log(prop.icon));
        })
    },[])

    if(!weatherInfo) {
        return null;
    }

    return (
        <div>
            <p>temperature {weatherInfo.main.temp} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather.map(prop => prop.icon)}@2x.png`}/>
            <p>wind {weatherInfo.wind.speed} m/s</p>
        </div>
    );
}

export default Weather;