import React from "react";
import { WeatherInfo } from "../types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



  interface WeatherProps {
    weatherInfo: WeatherInfo;
  }


const WeatherDetails: React.FC<WeatherProps> = ({ weatherInfo }) => {

    gsap.registerPlugin(useGSAP);

    useGSAP( () =>{
        
    },[])

    return (
        <div className="weatherDetails h-full flex-col flex justify-between 
        ">
            <h2 className="font-medium text-sm sm:text-base md:text-lg  2xl:text-2xl">MORE DETAILS:</h2>
            <div className="details text-[.68em] flex flex-col 
                sm:text-xs
                md:text-sm
                xl:text- xl:gap-2
                2xl:gap-2
            ">
                <p>
                    Wind speed: <span className="font-bold">{weatherInfo.current?.wind_mph}mph</span>
                </p>
                <p>
                    Wind direction: <span className="font-bold">{weatherInfo.current?.wind_dir}</span>
                </p>

                <p>
                    Air humidity: <span className="font-bold">{weatherInfo.current?.humidity}%</span>
                </p>
                <p>
                   Pressure : <span className="font-bold">{weatherInfo.current?.pressure_mb}mb </span>
                </p>


                
            </div>

        </div>
    )

}

export default WeatherDetails