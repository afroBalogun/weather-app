import React from "react";
import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar.tsx";
import Weather from "./components/Weather.tsx";
import { WeatherInfo } from "./types.tsx"
import Forecast from "./components/Forecast.tsx";
import Statistics from "./components/Statistics.tsx";
import WeatherDetails from "./components/WeatherDetails.tsx"


export default function App(){
    

    const [searchedLocation, setSearchedLocation] = useState("Lagos")
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({})
    const [F_Temperature, setF_Temperature] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true); // Add loading state



    useEffect(() => {
      setLoading(true); // Start loading when fetching data
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=c764207335a34d66a9b204020242309&q=${searchedLocation}&days=7&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherInfo(data); // Set fetched data
        setLoading(false); // End loading when data is fetched
      })
      .catch(() => setLoading(false)); // Handle any errors
  }, [searchedLocation]);

  if (searchedLocation === "" ){
    setSearchedLocation("Lagos")
}

    return (
        <div className="app relative w-full h-screen bg-white	p-5  flex flex-col gap-10 justify-between
        md:p-7  
        xl:px-16 xl:py-10
          2xl:px-20
        ">
            <Searchbar
        setSearchedLocation = {setSearchedLocation}
        setF_Temperature = {setF_Temperature}
        F_Temperature = {F_Temperature}
      />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <img src="images/loading.gif" alt="" /> {/* You can replace this with a spinner or loader */}
        </div>
      ) : (
        <div className="flex justify-between flex-wrap gap-10
        md:flex-col md:items-center md:flex-nowrap md:gap-5
        lg:flex-row lg: lg:flex-nowrap lg:justify-center lg:gap-14
        xl:justify-between
        2xl:justify-between
        ">
          <Weather weatherInfo={weatherInfo} F_Temperature={F_Temperature} />
          <Statistics weatherInfo={weatherInfo} F_Temperature={F_Temperature} />
        </div>
      )}

      {!loading && weatherInfo && (
        <Forecast ForecastInfo={weatherInfo} F_Temperature={F_Temperature} />
      )}
    </div>
  );
}