import { useEffect, useState } from "react";

const useWeather = () => {
    //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  const baseUrl = "https://api.openweathermap.org/data/2.5";
  let [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    let url = `${baseUrl}/weather?lat=8.404191&lon=39.387584&appid=4e99899cfc7011ecb212636c606eecf1`;
    //TODO: use .env
    //console.log(process.env.REACT_APP_OPEN_WEATHERMAP_APIKEY);
    getWeatherData(url).then((data)=>{
        setWeatherData(data);
    });
  }, []);

  return weatherData;
};

async function getWeatherData(url:string){
    let data = await fetch(url);
    return data.json();
}

export default useWeather;
