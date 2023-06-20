import axios from 'axios';

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
const appId = "&APPID=";
const api_key = process.env.REACT_APP_API_KEY;

const getWeather = (country) => {
    const request = axios.get(`${baseUrl}${country}${appId}${api_key}&units=metric`);
    return request.then(response => response.data);
    }

export default {getWeather}