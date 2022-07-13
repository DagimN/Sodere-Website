import { useEffect, useState } from "react";

const useCurrency = () => {    
const baseUrl = "https://api.apilayer.com/currency_data/live";
  let [currencyData, setCurrencyData] = useState<{
    USD: number;
    ETB: number;
  }>();

  useEffect(() => {  
    let url = `${baseUrl}?source=USD&currencies=ETB&apikey=I2jjG93u32eG90PY6LoLlx4MtbyjNNRj`;
    //TODO: use .env
    //console.log(process.env.REACT_APP_OPEN_WEATHERMAP_APIKEY);
    getCurrencyData(url, currencyData).then((data) => {
        console.log(data.quotes.USDETB);
        setCurrencyData({USD: 1, ETB: Number.parseFloat(data.quotes.USDETB)});
    });
  }, [currencyData]);

  return currencyData;
};

async function getCurrencyData(url: string, currencyData: {USD: number, ETB: number} | undefined, ATTEMPTS=10) {
    if(currencyData === undefined && ATTEMPTS > 0){
        let data = await fetch(url);
        if (data.status >= 200 && data.status < 300) return await data.json();
        else getCurrencyData(url, currencyData, ATTEMPTS - 1);
    }
}

export default useCurrency;
