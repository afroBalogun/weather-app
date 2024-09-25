import React from "react";
import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar.tsx";
import Weather from "./components/Weather.tsx";
import { WeatherInfo, SetSearchedLocation } from "./types.tsx"



export default function App(){
    

    const [searchedLocation, setSearchedLocation] = useState("Lagos")
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({})




    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=c764207335a34d66a9b204020242309&q=${searchedLocation}&aqi=yes`)
        .then(res => res.json())
        .then(data => setWeatherInfo(data))
    },[])

    console.log(weatherInfo)

    return (
        <div className="App w-full h-screen custom-gradient	px-14 py-4">
            <Searchbar
                setSearchedLocation = {setSearchedLocation}
            />
            <Weather
                weatherInfo = {weatherInfo}
            />
        </div>
    )
}