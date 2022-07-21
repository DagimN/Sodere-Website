import React, { useState } from 'react';

//Hooks
import useWeather from '../hooks/useWeather';
import useCurrency from '../hooks/useCurrency';

const RegionInfo = ({visibility, activatePopup}:{visibility:string, activatePopup:(value:string)=>void}) => {
  const weatherData = useWeather();
  const currencyData = useCurrency();
  const ETBRATE = 52.21;
  let [valueETB, setETBValue] = useState(currencyData?.ETB ?? ETBRATE);
    
  return (
    <div className={`md:grid relative md:bottom-8 z-10 ${visibility}`}>
      <div className="flex justify-center mr-10">
        <img src="" alt="" />
        <h3 className="text-xl">{(weatherData?.temp! - 273).toFixed(0)} °C</h3>
        <h4 className="text-[10px] mt-2 ml-2">
          {weatherData?.description.toUpperCase()}
        </h4>
      </div>

      <label htmlFor="birr" className="text-sm mr-2 my-1">
        <input
          type="text"
          name="birr"
          className="border-2 mr-3 rounded-lg px-2 py-1 w-[80%]"
          onChange={() => {}}
          onClick={() => {
            activatePopup("visible");
          }}
          defaultValue={currencyData?.ETB.toFixed(2)}
          value={
            valueETB !== undefined
              ? valueETB.toFixed(2)
              : currencyData?.ETB.toFixed(2)
          }
        />
        🇪🇹
      </label>
      <label htmlFor="dollar" className="text-sm mr-2 my-1">
        <input
          id="dollar_input"
          type="text"
          name="dollar"
          min={0}
          defaultValue={1}
          className="border-2 mr-3 rounded-lg px-2 py-1 w-[80%]"
          onClick={() => {
            activatePopup("invisible");
          }}
          onChange={(e) => {
            setETBValue(
              Number.parseFloat(e.target.value) * (currencyData?.ETB ?? ETBRATE)
            );
          }}
        />
        🇺🇸
      </label>
    </div>
  );
}

export default RegionInfo;
