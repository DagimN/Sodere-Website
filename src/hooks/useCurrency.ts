import { useEffect, useState } from "react";

const useCurrency = () => {    
const baseUrl = "https://api.apilayer.com/currency_data/live";
  let [currencyData, setCurrencyData] = useState<{
    USD: number;
    ETB: number;
  }>();

  useEffect(() => {  
    let url = `${baseUrl}?source=USD&currencies=ETB&apikey=${process.env.REACT_APP_CURRENCY_APIKEY}`;
    getCurrencyData(url, currencyData).then((data) => {
        console.log(data.quotes.USDETB);
        setCurrencyData({USD: 1, ETB: Number.parseFloat(data.quotes.USDETB)});
    });
  }, [currencyData]);

  return currencyData;
};

async function getCurrencyData(url: string, currencyData: {USD: number, ETB: number} | undefined, ATTEMPTS=3) {
    if(currencyData === undefined && ATTEMPTS > 0){
        let data = await fetch(url);
        if (data.status >= 200 && data.status < 300) return await data.json();
        else getCurrencyData(url, currencyData, ATTEMPTS - 1);
    }
}

export default useCurrency;
