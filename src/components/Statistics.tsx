import React from "react";
import { WeatherInfo } from "../types";


  interface WeatherProps {
    weatherInfo: WeatherInfo;
    F_Temperature: boolean
  }

const Statistics: React.FC<WeatherProps> = ({ weatherInfo, F_Temperature }) => {

    const hourlyStats = weatherInfo.forecast?.forecastday?.[0].hour
    .filter((_, index) => index % 3 === 0)
    .map((hour) => {
        return(
            <div className="flex flex-col items-center hover:cursor-pointer transition duration-100
                gap-1
            ">
                <img src={`${hour.condition.icon}`} alt="" 
                    className="w-10
                        xl:w-11
                        min-[1400px]:w-12

                    "
                />
                <p className="font-bold text-xs
                            min-[530px]:text-sm
                            md:text-lg
                            min-[1400px]:text-xl
                " >
                    {F_Temperature? hour.temp_f : hour.temp_c}&deg;
                </p>
                <p className="text-[.6em] xl:text-sm">
                  {hour.time.split(' ')[1]}
                </p>
            </div>
        )
 
    });

    return(
        <div className="p-5  bg-slate-400 w-full  overflow-x-auto
        md:w-auto
        xl:p-7
">
            
            <div className="timeOfDay mb-3 flex justify-start text-[.6em] font-bold gap-16 
                min-[530px]:gap-24
                sm:gap-32
                md:gap-28 md:text-xs
                lg:gap-20
                min-[1400px]:gap-28
            ">
                <p>NIGHT</p>
                <p>MORNING</p>
                <p>DAY</p>
                <p>EVENING</p>
            </div>
            <div className="hourlyStats flex gap-5
                            min-[530px]:gap-0 min-[530px]:justify-between
                            md:gap-10
                            lg:gap-5
                            min-[1400px]:gap-8

                            
            ">
                {hourlyStats}
            </div>
        </div>
    )
}

export default Statistics;
