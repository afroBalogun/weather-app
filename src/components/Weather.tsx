import React from "react";
import { WeatherInfo } from "../types";



  interface WeatherProps {
    weatherInfo: WeatherInfo;
  }



const Weather: React.FC<WeatherProps> = ({ weatherInfo }) => {
    return (
        <div className="weather absolute bottom-20 left-20 m-5 p-10 flex items-end gap-6">
            <h2 className="temp font-serif text-7xl font-bold ">
                {weatherInfo.current?.temp_c} <sup >o</sup>
            </h2>
            <div className="location relative w-auto flex-col gap-4 font-bold">
                <h3 className="relative text-4xl mb-2">
                    {weatherInfo.location?.name}
                </h3>
                <p>
                    {weatherInfo.location?.localtime}
                </p>
            </div>
            <div className="condition flex-col justify-center">
                    <img 
                        className=""
                        src={weatherInfo.current?.condition.icon} 
                        alt="condition icon" />
                    <p className="font-bold">{weatherInfo.current?.condition.text}</p>
            </div>
        </div>
    );
  };

export default Weather;
