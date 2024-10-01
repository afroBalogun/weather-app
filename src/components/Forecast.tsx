import React from "react";
import { WeatherInfo, Day } from "../types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

    interface ForecastProps {
        ForecastInfo: WeatherInfo;
        F_Temperature: boolean;
  }

const Forecast: React.FC<ForecastProps> = ({ ForecastInfo, F_Temperature }) => {
    
 

    const days = ForecastInfo.forecast?.forecastday;
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const weekForecast = days?.map((day) => {
        return(
            <div key={day.date} id = "lol"  className="day w-40 flex flex-col items-center  relative transition ease-in-out duration-100 hover:transition hover:ease-in-out hover:duration-100 hover:border-x-[1px] border-gray-700 mb-5 hover:cursor-pointer hover:scale-105"
>
                <h2 className="font-semibold text-sm">
                    {week[new Date(day.date).getDay()]}
                </h2>
                <p  className="text-xs font-light">

                    {day.date}
                </p>
                <p className="text-xs font-light">
                    min 
                    <span className="text-span font-bold">
                        {` ${F_Temperature? day.day.mintemp_f : day.day.mintemp_c}`}&deg;
                    </span>
                </p>
                <p className="text-xs font-light">
                    max
                    <span className="text-span font-bold">
                        {` ${F_Temperature? day.day.maxtemp_f : day.day.maxtemp_c}`}&deg;
                    </span>
                    
                </p>
                <img src={`${day.day.condition.icon}`} alt="" />
                <p className="text-xs font-light">
                    {day.day.condition.text}
                </p>
            </div>
        )
    }
            
    )

    return (
        <div 
            className="forecast text-based flex flex-wrap justify-around border-t-2 border-solid pt-4 border-span 
                sm:gap-10
                md:justify-center md:gap-10 
                lg:justify-start lg:gap-5
                xl:justify-between xl:gap-0
            " 
        >
            {weekForecast}
        </div>
    )
  }

  export default Forecast;
