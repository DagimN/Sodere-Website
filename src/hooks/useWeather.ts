import { useEffect, useState } from "react";

const useWeather = () => {
  const baseUrl = "https://api.openweathermap.org/data/2.5";
  let [weatherData, setWeatherData] = useState<{
    description: string;
    temp: number;
  }>();
  useEffect(() => {
    let url = `${baseUrl}/weather?lat=8.404191&lon=39.387584&appid=${process.env.REACT_APP_OPEN_WEATHERMAP_APIKEY}`;
    getWeatherData(url).then((data)=>{
        setWeatherData({description: data.weather[0].description, temp: data.main.feels_like});
    });
  }, []);

  return weatherData;
};

async function getWeatherData(url:string){
    let data = await fetch(url);
    return await data.json();
}

export default useWeather;
