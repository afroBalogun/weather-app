import React from "react";
import { WeatherInfo } from "../types";
import WeatherDetails from "./WeatherDetails.tsx";


  interface WeatherProps {
    weatherInfo: WeatherInfo;
    F_Temperature : boolean
  }



const Weather: React.FC<WeatherProps> = ({ weatherInfo, F_Temperature }) => {

    const temperature = F_Temperature
    ? weatherInfo.current?.temp_f
    : weatherInfo.current?.temp_c;

    const tempUnit = F_Temperature ? "F" : "C"; // Displaying the unit

    return (
        <div className="weather w-full  flex justify-between gap-[5px] items-end 
            min-[400px]:justify-around 
            lg:justify-between lg:w-auto lg:h-full lg:gap-5
            xl:gap-8
            2xl:gap-10
        ">
            <div className="condition h-full flex flex-col items-center justify-between text-xs text-based">
                <img 
                    className="w-20 hover:cursor-pointer
                    md:w-28
                        lg:w-32
                        xl:w-40
                    "
                    src={weatherInfo.current?.condition.icon} 
                    alt="condition icon " />
                <p className="font-medium xl:text-base">{weatherInfo.current?.condition.text}</p>
            </div>


            <div className="location h-full relative justify-between flex flex-col gap-1 font-medium text-based">
                
                <div className="text-sm font-normal flex flex-col
                    min-[350px]:w-[110px]
                    min-[400px]:text-base     min-[400px]:w-[170px]   min-[420px]:w-auto                
                    sm:text-xl
                    md:text-2xl
                    2xl:text-4xl
                " >
                    <h3 className="relative  ">
                        {weatherInfo.location?.name},
                    </h3>
                    <h3>
                        {weatherInfo.location?.country}.
                    </h3>
                    
                </div>

                <h2 className="temp font-sans text-lg text-based font-bold
                                min-[400px]:text-xl
                                sm:text-xl
                                md:text-3xl md:font-normal
                                xl:text-[46px]
                                2xl:text-6xl
                ">
                    {temperature} &deg;{tempUnit} 
                </h2>
                
                <p className="text-xs
                    lg:text-sm
                    xl:text-base
                ">
                    {weatherInfo.location?.localtime}
                </p>
            </div>
            <WeatherDetails weatherInfo={weatherInfo} />

        </div>
    );
  };

export default Weather;
